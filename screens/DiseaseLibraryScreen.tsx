import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenProps } from '../App';
import { C } from '../components/UI';

interface DiseaseItem {
  id: string;
  title: string;
  scientificName: string;
  crops: string;
  category: 'Fungos' | 'Bactérias' | 'Pragas';
  imageUrl?: string;
}

const mockDiseases: DiseaseItem[] = [
  {
    id: '1',
    title: 'Mancha-alvo',
    scientificName: 'Alternaria spp.',
    crops: 'Tomate, Soja, Algodão',
    category: 'Fungos',
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=600',
  },
  {
    id: '2',
    title: 'Míldio',
    scientificName: 'Plasmopara viticola',
    crops: 'Videira, Hortaliças',
    category: 'Fungos',
  },
  {
    id: '3',
    title: 'Ferrugem-comum',
    scientificName: 'Puccinia sorghi',
    crops: 'Milho',
    category: 'Fungos',
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=600',
  },
];

export default function DiseaseLibraryScreen({ goTo }: ScreenProps) {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'Todas' | 'Fungos' | 'Bactérias' | 'Pragas'>('Todas');

  const filteredDiseases = mockDiseases.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.scientificName.toLowerCase().includes(searchText.toLowerCase()) ||
      item.crops.toLowerCase().includes(searchText.toLowerCase());

    if (selectedCategory === 'Todas') return matchesSearch;
    return matchesSearch && item.category === selectedCategory;
  });

  return (
    <View style={s.page}>
      {/* Cabeçalho */}
      <View style={s.header}>
        <TouchableOpacity onPress={() => goTo('Home')} activeOpacity={0.7} style={s.backButton}>
          <Ionicons name="arrow-back" size={24} color="#154A33" />
        </TouchableOpacity>
        <Text style={s.headerTitle}>Biblioteca de Doenças</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
        {/* Campo de Pesquisa */}
        <View style={s.searchContainer}>
          <Ionicons name="search" size={20} color="#8A9A86" style={s.searchIcon} />
          <TextInput
            style={s.searchInput}
            placeholder="Pesquisar por doença ou cultura..."
            placeholderTextColor="#8A9A86"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Chips de Categoria */}
        <View style={s.filterRow}>
          {(['Todas', 'Fungos', 'Bactérias', 'Pragas'] as const).map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <TouchableOpacity
                key={cat}
                style={[s.filterChip, isActive && s.filterChipActive]}
                activeOpacity={0.8}
                onPress={() => setSelectedCategory(cat)}
              >
                <Text style={[s.filterText, isActive && s.filterTextActive]}>{cat}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Lista de Cards da Biblioteca */}
        {filteredDiseases.map((disease) => (
          <TouchableOpacity
            key={disease.id}
            style={s.card}
            activeOpacity={0.8}
            onPress={() => goTo('DiseaseDetails')}
          >
            {disease.imageUrl ? (
              <Image source={{ uri: disease.imageUrl }} style={s.cardImage} />
            ) : (
              <View style={[s.cardImage, s.cardImagePlaceholder]}>
                <Ionicons name="bug-outline" size={28} color="#154A33" />
              </View>
            )}

            <View style={s.cardDetails}>
              <Text style={s.diseaseTitle}>{disease.title}</Text>
              <Text style={s.scientificName}>{disease.scientificName}</Text>
              <Text style={s.cropsText}>Cultura: {disease.crops}</Text>

              <View style={s.badgeCategory}>
                <Text style={s.badgeText}>{disease.category === 'Fungos' ? 'Fungo' : disease.category}</Text>
              </View>
            </View>

            <Ionicons name="chevron-forward" size={18} color="#8A9A86" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Barra de Navegação Inferior */}
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
    gap: 8,
    marginBottom: 20,
  },
  filterChip: {
    paddingHorizontal: 16,
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
  cardDetails: { flex: 1, marginLeft: 12, marginRight: 8 },
  diseaseTitle: { fontSize: 15, fontWeight: '700', color: '#154A33' },
  scientificName: { fontSize: 12, fontStyle: 'italic', color: '#718096', marginTop: 2 },
  cropsText: { fontSize: 11, color: '#718096', marginTop: 4 },
  badgeCategory: {
    backgroundColor: '#E4EBDC',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  badgeText: { fontSize: 10, fontWeight: '600', color: '#154A33' },
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