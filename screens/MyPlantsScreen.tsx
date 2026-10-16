import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenProps } from '../App';
import { C } from '../components/UI';

interface PlantItem {
  id: string;
  name: string;
  scientificName: string;
  lastAnalysis: string;
  status: 'Saudável' | 'Atenção';
  imageUrl?: string;
}

const mockPlants: PlantItem[] = [
  {
    id: '1',
    name: 'Tomateiro Estufa 1',
    scientificName: 'Solanum lycopersicum',
    lastAnalysis: 'Hoje às 14:30',
    status: 'Atenção',
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=600',
  },
  {
    id: '2',
    name: 'Videira Niagara',
    scientificName: 'Vitis labrusca',
    lastAnalysis: '10/10/2026',
    status: 'Saudável',
  },
  {
    id: '3',
    name: 'Milho Talhão 4',
    scientificName: 'Zea mays',
    lastAnalysis: '02/10/2026',
    status: 'Saudável',
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=600',
  },
];

export default function MyPlantsScreen({ goTo }: ScreenProps) {
  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'Todas' | 'Saudáveis' | 'Atenção'>('Todas');

  const filteredPlants = mockPlants.filter((plant) => {
    const matchesSearch =
      plant.name.toLowerCase().includes(searchText.toLowerCase()) ||
      plant.scientificName.toLowerCase().includes(searchText.toLowerCase());

    if (selectedFilter === 'Saudáveis') return matchesSearch && plant.status === 'Saudável';
    if (selectedFilter === 'Atenção') return matchesSearch && plant.status === 'Atenção';
    return matchesSearch;
  });

  const countTodas = mockPlants.length;
  const countSaudaveis = mockPlants.filter((p) => p.status === 'Saudável').length;
  const countAtencao = mockPlants.filter((p) => p.status === 'Atenção').length;

  return (
    <View style={s.page}>
      {/* Cabeçalho */}
      <View style={s.header}>
        <TouchableOpacity onPress={() => goTo('Home')} activeOpacity={0.7} style={s.backButton}>
          <Ionicons name="arrow-back" size={24} color="#154A33" />
        </TouchableOpacity>
        <Text style={s.headerTitle}>Minhas Plantas</Text>
        <TouchableOpacity
          style={s.addButton}
          activeOpacity={0.8}
          onPress={() => goTo('Capture')}
        >
          <Ionicons name="add" size={22} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
        {/* Campo de Busca */}
        <View style={s.searchContainer}>
          <Ionicons name="search" size={20} color="#8A9A86" style={s.searchIcon} />
          <TextInput
            style={s.searchInput}
            placeholder="Buscar entre minhas plantas..."
            placeholderTextColor="#8A9A86"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Chips de Filtro */}
        <View style={s.filterRow}>
          <TouchableOpacity
            style={[s.filterChip, selectedFilter === 'Todas' && s.filterChipActive]}
            activeOpacity={0.8}
            onPress={() => setSelectedFilter('Todas')}
          >
            <Text style={[s.filterText, selectedFilter === 'Todas' && s.filterTextActive]}>
              Todas ({countTodas})
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[s.filterChip, selectedFilter === 'Saudáveis' && s.filterChipActive]}
            activeOpacity={0.8}
            onPress={() => setSelectedFilter('Saudáveis')}
          >
            <Text style={[s.filterText, selectedFilter === 'Saudáveis' && s.filterTextActive]}>
              Saudáveis ({countSaudaveis})
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[s.filterChip, selectedFilter === 'Atenção' && s.filterChipActive]}
            activeOpacity={0.8}
            onPress={() => setSelectedFilter('Atenção')}
          >
            <Text style={[s.filterText, selectedFilter === 'Atenção' && s.filterTextActive]}>
              Atenção ({countAtencao})
            </Text>
          </TouchableOpacity>
        </View>

        {/* Lista de Cards de Plantas */}
        {filteredPlants.map((plant) => (
          <TouchableOpacity
            key={plant.id}
            style={s.card}
            activeOpacity={0.8}
            onPress={() => goTo('PlantTracking')}
          >
            {plant.imageUrl ? (
              <Image source={{ uri: plant.imageUrl }} style={s.cardImage} />
            ) : (
              <View style={[s.cardImage, s.cardImagePlaceholder]}>
                <Ionicons name="leaf-outline" size={28} color="#154A33" />
              </View>
            )}

            <View style={s.cardDetails}>
              <View style={s.cardHeaderRow}>
                <Text style={s.plantName}>{plant.name}</Text>
                <View
                  style={[
                    s.statusBadge,
                    plant.status === 'Atenção' ? s.badgeWarning : s.badgeHealthy,
                  ]}
                >
                  <Text
                    style={[
                      s.statusText,
                      plant.status === 'Atenção' ? s.textWarning : s.textHealthy,
                    ]}
                  >
                    {plant.status}
                  </Text>
                </View>
              </View>

              <Text style={s.scientificName}>{plant.scientificName}</Text>
              <Text style={s.lastAnalysis}>Última análise: {plant.lastAnalysis}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Barra de Navegação Inferior Padronizada */}
      <View style={s.nav}>
        <TouchableOpacity style={s.navItem} activeOpacity={0.7} onPress={() => goTo('Home')}>
          <Ionicons name="home-outline" size={20} color={C.muted} />
          <Text style={s.navText}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={s.navItem} activeOpacity={0.7} onPress={() => goTo('History')}>
          <Ionicons name="document-text-outline" size={20} color={C.muted} />
          <Text style={s.navText}>Histórico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={s.navItem} activeOpacity={0.7} onPress={() => goTo('Home')}>
          <Ionicons name="heart-outline" size={20} color={C.muted} />
          <Text style={s.navText}>Dicas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={s.navItem} activeOpacity={0.7} onPress={() => goTo('Profile')}>
          <Ionicons name="person-outline" size={20} color={C.muted} />
          <Text style={s.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#F4F6F0' },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  backButton: { padding: 4 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: '#154A33' },
  addButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#154A33',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 24 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingHorizontal: 16,
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 14, color: '#2D3748' },
  filterRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  filterChip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#E4EBDC',
  },
  filterChipActive: {
    backgroundColor: '#154A33',
  },
  filterText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#154A33',
  },
  filterTextActive: {
    color: '#FFFFFF',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    marginBottom: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EAEFE6',
  },
  cardImage: { width: 72, height: 72, borderRadius: 14 },
  cardImagePlaceholder: {
    backgroundColor: '#E4EBDC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardDetails: { flex: 1, marginLeft: 12 },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  plantName: { fontSize: 15, fontWeight: '700', color: '#154A33', flex: 1 },
  scientificName: { fontSize: 12, fontStyle: 'italic', color: '#718096', marginTop: 2 },
  lastAnalysis: { fontSize: 11, color: '#A0AEC0', marginTop: 6 },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 10,
    fontWeight: '600',
  },
  badgeHealthy: { backgroundColor: '#D1E7DD' },
  textHealthy: { color: '#154A33' },
  badgeWarning: { backgroundColor: '#FCEFC7' },
  textWarning: { color: '#8A6D00' },
  nav: {
    height: 64,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  navItem: { alignItems: 'center', gap: 4 },
  navText: { fontSize: 9, color: C.muted },
});