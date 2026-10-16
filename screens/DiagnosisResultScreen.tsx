import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenProps } from '../App';

export default function DiagnosticResultScreen({ goTo }: ScreenProps) {
  return (
    <View style={s.page}>
      {/* Cabeçalho */}
      <View style={s.header}>
        <TouchableOpacity onPress={() => goTo('Home')} activeOpacity={0.7} style={s.backButton}>
          <Ionicons name="arrow-back" size={24} color="#154A33" />
        </TouchableOpacity>
        <Text style={s.headerTitle}>Resultado da análise</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
        {/* Card do Resultado */}
        <View style={s.resultCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=600' }}
            style={s.plantImage}
          />
          <View style={s.cardInfo}>
            <Text style={s.diseaseName}>Mancha-alvo</Text>
            <Text style={s.scientificName}>(Alternaria spp.)</Text>
            <Text style={s.plantType}>Tomateiro</Text>

            <View style={s.badgeConfidence}>
              <Text style={s.badgeText}>Confiança: 87%</Text>
            </View>

            <Text style={s.severityText}>Severidade: Média</Text>
          </View>
        </View>

        {/* Seção Sintomas */}
        <Text style={s.sectionTitle}>Sintomas</Text>
        <View style={s.infoCard}>
          <Text style={s.infoText}>
            Manchas escuras e circulares nas folhas, com halo amarelado.
          </Text>
        </View>

        {/* Seção Orientações Iniciais */}
        <Text style={s.sectionTitle}>Orientações iniciais</Text>
        <View style={s.infoCard}>
          <Text style={s.infoText}>
            • Remova folhas afetadas e evite excesso de umidade.
          </Text>
        </View>

        <Text style={s.disclaimer}>
          Resultado estimado por inteligência artificial. Não substitui a avaliação de um especialista.
        </Text>
      </ScrollView>

      {/* Botões de Ação na Parte Inferior */}
      <View style={s.footer}>
        <TouchableOpacity
          style={s.secondaryButton}
          activeOpacity={0.8}
          onPress={() => goTo('DiseaseDetails')}
        >
          <Text style={s.secondaryButtonText}>Ver detalhes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={s.primaryButton}
          activeOpacity={0.8}
          onPress={() => goTo('Capture')}
        >
          <Text style={s.primaryButtonText}>Nova análise</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F4F6F0',
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#154A33',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 20,
  },
  resultCard: {
    flexDirection: 'row',
    backgroundColor: '#E4EBDC',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  plantImage: {
    width: 90,
    height: 90,
    borderRadius: 16,
  },
  cardInfo: {
    flex: 1,
    marginLeft: 14,
  },
  diseaseName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#154A33',
  },
  scientificName: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#4A5568',
  },
  plantType: {
    fontSize: 12,
    color: '#4A5568',
    marginTop: 2,
  },
  badgeConfidence: {
    backgroundColor: '#C5D8B5',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginTop: 6,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#154A33',
  },
  severityText: {
    fontSize: 11,
    color: '#4A5568',
    marginTop: 6,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#154A33',
    marginBottom: 8,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  infoText: {
    fontSize: 13,
    color: '#4A5568',
    lineHeight: 18,
  },
  disclaimer: {
    fontSize: 11,
    color: '#8A9A86',
    textAlign: 'center',
    marginTop: 8,
    paddingHorizontal: 10,
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 24,
    paddingTop: 12,
    gap: 12,
    backgroundColor: '#F4F6F0',
  },
  secondaryButton: {
    flex: 1,
    height: 48,
    backgroundColor: '#E4EBDC',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: '#154A33',
    fontSize: 14,
    fontWeight: '600',
  },
  primaryButton: {
    flex: 1,
    height: 48,
    backgroundColor: '#154A33',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});