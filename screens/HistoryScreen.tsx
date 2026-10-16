import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenProps } from '../App';
import { C } from '../components/UI';

interface HistoryItem {
  id: string;
  plant: string;
  disease: string;
  date: string;
  severity: string;
  severityColor: string;
  badgeBg: string;
  accuracy: string;
  imageUrl?: string;
}

const mockHistory: HistoryItem[] = [
  {
    id: '1',
    plant: 'Tomateiro',
    disease: 'Mancha-alvo',
    date: '14/10/2026',
    severity: 'Severidade Média',
    severityColor: '#8A6D00',
    badgeBg: '#FCEFC7',
    accuracy: '87% precisão',
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=600',
  },
  {
    id: '2',
    plant: 'Videira',
    disease: 'Planta Saudável',
    date: '10/10/2026',
    severity: 'Saudável',
    severityColor: '#154A33',
    badgeBg: '#D1E7DD',
    accuracy: '95% precisão',
  },
  {
    id: '3',
    plant: 'Milho',
    disease: 'Ferrugem-comum',
    date: '02/10/2026',
    severity: 'Severidade Alta',
    severityColor: '#9B1C1C',
    badgeBg: '#FDE8E8',
    accuracy: '91% precisão',
    imageUrl: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=600',
  },
];

export default function HistoryScreen({ goTo }: ScreenProps) {
  const [searchText, setSearchText] = useState('');

  const filteredHistory = mockHistory.filter(
    (item) =>
      item.plant.toLowerCase().includes(searchText.toLowerCase()) ||
      item.disease.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={s.page}>
      {/* Cabeçalho */}
      <View style={s.header}>
        <TouchableOpacity
          onPress={() => goTo('Home')}
          activeOpacity={0.7}
          style={s.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#154A33" />
        </TouchableOpacity>
        <Text style={s.headerTitle}>Histórico de análises</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
        {/* Campo de Busca */}
        <View style={s.searchContainer}>
          <Ionicons name="search" size={20} color="#8A9A86" style={s.searchIcon} />
          <TextInput
            style={s.searchInput}
            placeholder="Buscar por planta ou doença..."
            placeholderTextColor="#8A9A86"
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>

        {/* Lista de Cards de Histórico */}
        {filteredHistory.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={s.card}
            activeOpacity={0.8}
            onPress={() => goTo('DiagnosisResult')}
          >
            {item.imageUrl ? (
              <Image source={{ uri: item.imageUrl }} style={s.cardImage} />
            ) : (
              <View style={[s.cardImage, s.cardImagePlaceholder]}>
                <Ionicons name="leaf-outline" size={28} color="#154A33" />
              </View>
            )}

            <View style={s.cardDetails}>
              <View style={s.cardRowBetween}>
                <Text style={s.plantName}>{item.plant}</Text>
                <Text style={s.dateText}>{item.date}</Text>
              </View>

              <Text style={s.diseaseName}>{item.disease}</Text>

              <View style={s.cardRowBetween}>
                <View style={[s.severityBadge, { backgroundColor: item.badgeBg }]}>
                  <Text style={[s.severityText, { color: item.severityColor }]}>
                    {item.severity}
                  </Text>
                </View>
                <Text style={s.accuracyText}>{item.accuracy}</Text>
              </View>
            </View>
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
          <Ionicons name="document-text" size={20} color={C.green} />
          <Text style={[s.navText, { color: C.green, fontWeight: '600' }]}>Histórico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={s.navItem} activeOpacity={0.7} onPress={() => goTo('Home')}>
          <Ionicons name="bulb-outline" size={20} color={C.muted} />
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
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 14, color: '#2D3748' },
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
  cardRowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
  },
  plantName: { fontSize: 12, color: '#718096' },
  dateText: { fontSize: 11, color: '#A0AEC0' },
  diseaseName: { fontSize: 15, fontWeight: '700', color: '#154A33', marginVertical: 3 },
  severityBadge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  severityText: { fontSize: 10, fontWeight: '600' },
  accuracyText: { fontSize: 11, color: '#718096' },
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