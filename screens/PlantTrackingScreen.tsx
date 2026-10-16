import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenProps } from '../App';

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  badge: string;
  badgeType: 'ai' | 'action' | 'register';
  isLatest?: boolean;
}

const historyTimeline: TimelineEvent[] = [
  {
    id: '1',
    date: 'Hoje, 14:30',
    title: 'Diagnóstico: Mancha-alvo',
    description: 'Sintomas fúngicos detectados. Recomendada a remoção de folhas afetadas e redução de umidade.',
    badge: 'Análise IA',
    badgeType: 'ai',
    isLatest: true,
  },
  {
    id: '2',
    date: '05/10/2026',
    title: 'Aplicação de Fungicida',
    description: 'Aplicação preventiva realizada conforme orientação de manejo.',
    badge: 'Ação',
    badgeType: 'action',
  },
  {
    id: '3',
    date: '20/09/2026',
    title: 'Planta Cadastrada',
    description: 'Planta registrada no sistema para monitoramento periódico.',
    badge: 'Cadastro',
    badgeType: 'register',
  },
];

export default function PlantTrackingScreen({ goTo }: ScreenProps) {
  return (
    <View style={s.page}>
      {/* Cabeçalho */}
      <View style={s.header}>
        <TouchableOpacity onPress={() => goTo('MyPlants')} activeOpacity={0.7} style={s.backButton}>
          <Ionicons name="arrow-back" size={24} color="#154A33" />
        </TouchableOpacity>
        <Text style={s.headerTitle}>Acompanhamento</Text>
        <TouchableOpacity onPress={() => goTo('Profile')} activeOpacity={0.7}>
          <Ionicons name="settings-outline" size={22} color="#8A9A86" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
        {/* Card Resumo da Planta */}
        <View style={s.plantCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=600' }}
            style={s.plantImage}
          />
          <View style={s.plantDetails}>
            <Text style={s.plantName}>Tomateiro Estufa 1</Text>
            <Text style={s.scientificName}>Solanum lycopersicum</Text>

            <View style={s.locationRow}>
              <Ionicons name="location" size={13} color="#D97706" />
              <Text style={s.locationText}>Estufa Principal - Setor Norte</Text>
            </View>

            <View style={s.statusBadge}>
              <Text style={s.statusText}>Em tratamento</Text>
            </View>
          </View>
        </View>

        {/* Histórico de Evolução (Linha do Tempo) */}
        <Text style={s.sectionTitle}>Histórico de Evolução</Text>

        <View style={s.timelineContainer}>
          {historyTimeline.map((item, index) => {
            const isLast = index === historyTimeline.length - 1;

            return (
              <View key={item.id} style={s.timelineRow}>
                {/* Linha e Indicador da Timeline */}
                <View style={s.timelineLeftColumn}>
                  <View
                    style={[
                      s.dot,
                      item.isLatest ? s.dotActive : s.dotInactive,
                    ]}
                  />
                  {!isLast && <View style={s.line} />}
                </View>

                {/* Card de Evento */}
                <View style={s.eventCard}>
                  <View style={s.eventHeader}>
                    <Text style={s.eventDate}>{item.date}</Text>
                    <View
                      style={[
                        s.eventBadge,
                        item.badgeType === 'ai' && s.badgeAi,
                        item.badgeType === 'action' && s.badgeAction,
                        item.badgeType === 'register' && s.badgeRegister,
                      ]}
                    >
                      <Text
                        style={[
                          s.eventBadgeText,
                          item.badgeType === 'ai' && s.textAi,
                          item.badgeType === 'action' && s.textAction,
                          item.badgeType === 'register' && s.textRegister,
                        ]}
                      >
                        {item.badge}
                      </Text>
                    </View>
                  </View>

                  <Text style={s.eventTitle}>{item.title}</Text>
                  <Text style={s.eventDescription}>{item.description}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>

      {/* Botão Inferior de Ação */}
      <View style={s.footer}>
        <TouchableOpacity
          style={s.actionButton}
          activeOpacity={0.8}
          onPress={() => goTo('Capture')}
        >
          <Text style={s.actionButtonText}>Nova Análise desta Planta</Text>
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
  plantCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#EAEFE6',
  },
  plantImage: { width: 80, height: 80, borderRadius: 16 },
  plantDetails: { flex: 1, marginLeft: 14 },
  plantName: { fontSize: 16, fontWeight: '700', color: '#154A33' },
  scientificName: { fontSize: 12, fontStyle: 'italic', color: '#718096', marginTop: 2 },
  locationRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 6 },
  locationText: { fontSize: 11, color: '#718096' },
  statusBadge: {
    backgroundColor: '#FCEFC7',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  statusText: { fontSize: 10, fontWeight: '600', color: '#8A6D00' },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#154A33', marginBottom: 16 },
  timelineContainer: { paddingLeft: 4 },
  timelineRow: { flexDirection: 'row', marginBottom: 16 },
  timelineLeftColumn: { alignItems: 'center', width: 24, marginRight: 8 },
  dot: { width: 14, height: 14, borderRadius: 7, marginTop: 14 },
  dotActive: { backgroundColor: '#154A33' },
  dotInactive: { backgroundColor: '#CBD5E1' },
  line: { flex: 1, width: 2, backgroundColor: '#E2E8F0', marginTop: 4 },
  eventCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#EAEFE6',
  },
  eventHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  eventDate: { fontSize: 11, color: '#718096' },
  eventBadge: { paddingHorizontal: 10, paddingVertical: 3, borderRadius: 12 },
  eventBadgeText: { fontSize: 10, fontWeight: '600' },
  badgeAi: { backgroundColor: '#E4EBDC' },
  textAi: { color: '#154A33' },
  badgeAction: { backgroundColor: '#D1E7DD' },
  textAction: { color: '#154A33' },
  badgeRegister: { backgroundColor: '#E2E8F0' },
  textRegister: { color: '#475569' },
  eventTitle: { fontSize: 14, fontWeight: '700', color: '#154A33', marginTop: 6 },
  eventDescription: { fontSize: 12, color: '#4A5568', lineHeight: 17, marginTop: 4 },
  footer: { paddingHorizontal: 20, paddingBottom: 24, paddingTop: 12, backgroundColor: '#F4F6F0' },
  actionButton: {
    height: 50,
    backgroundColor: '#154A33',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
});