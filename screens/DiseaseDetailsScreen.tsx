import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { ScreenProps } from '../App';

export default function DiseaseDetailsScreen({ goTo }: ScreenProps) {
  const [activeTab, setActiveTab] = useState<'sobre' | 'manejo'>('sobre');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F6F0" />

      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          activeOpacity={0.7}
          onPress={() => goTo('Home')}
        >
          <Text style={styles.headerIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Detalhes da doença</Text>
        <TouchableOpacity style={styles.headerButton} activeOpacity={0.7}>
          <Text style={styles.headerIcon}>↗</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Banner com foto e nome da doença */}
        <View style={styles.bannerCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800' }}
            style={styles.bannerImage}
            resizeMode="cover"
          />
          <View style={styles.bannerOverlay}>
            <Text style={styles.diseaseTitle}>Mancha-alvo</Text>
            <Text style={styles.scientificName}>(Alternaria spp.)</Text>
          </View>
        </View>

        {/* Abas: Sobre / Manejo */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'sobre' && styles.tabButtonActive]}
            activeOpacity={0.8}
            onPress={() => setActiveTab('sobre')}
          >
            <Text style={[styles.tabText, activeTab === 'sobre' && styles.tabTextActive]}>
              Sobre
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'manejo' && styles.tabButtonActive]}
            activeOpacity={0.8}
            onPress={() => setActiveTab('manejo')}
          >
            <Text style={[styles.tabText, activeTab === 'manejo' && styles.tabTextActive]}>
              Manejo
            </Text>
          </TouchableOpacity>
        </View>

        {/* Conteúdo da Aba SOBRE */}
        {activeTab === 'sobre' ? (
          <View style={styles.contentGroup}>
            {/* Descrição */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Descrição</Text>
              <Text style={styles.paragraphText}>
                Doença fúngica que afeta diversas culturas, causada pelo fungo Alternaria alternata.
              </Text>
            </View>

            {/* Agente causador */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Agente causador</Text>
              <Text style={styles.paragraphText}>Fungo Alternaria alternata.</Text>
            </View>

            {/* Sintomas */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Sintomas</Text>
              <View style={styles.bulletList}>
                <View style={styles.bulletRow}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>Manchas escuras e circulares nas folhas</Text>
                </View>
                <View style={styles.bulletRow}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>Halo amarelado</Text>
                </View>
                <View style={styles.bulletRow}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>Pode afetar frutos e caules</Text>
                </View>
              </View>
            </View>
          </View>
        ) : (
          /* Conteúdo da Aba MANEJO */
          <View style={styles.contentGroup}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Tratamento e Prevenção</Text>
              <View style={styles.bulletList}>
                <View style={styles.bulletRow}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>Remover e descartar as folhas infectadas.</Text>
                </View>
                <View style={styles.bulletRow}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>Evitar molhar as folhas durante a rega.</Text>
                </View>
                <View style={styles.bulletRow}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>Manter bom espaçamento para circulação de ar.</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Menu Inferior de Navegação (Bottom Bar) */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => goTo('Home')}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navLabel}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => goTo('Home')}>
          <Text style={styles.navIcon}>📋</Text>
          <Text style={styles.navLabel}>Histórico</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => goTo('Home')}>
          <Text style={styles.navIcon}>💡</Text>
          <Text style={styles.navLabel}>Dicas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem} onPress={() => goTo('Home')}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navLabel}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  headerButton: {
    padding: 4,
  },
  headerIcon: {
    fontSize: 20,
    color: '#154A33',
    fontWeight: '600',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#154A33',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  bannerCard: {
    height: 140,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 16,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(21, 74, 51, 0.65)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  diseaseTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  scientificName: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#E4EBDC',
    marginTop: 2,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#E4EBDC',
    borderRadius: 20,
    padding: 4,
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 16,
  },
  tabButtonActive: {
    backgroundColor: '#FFFFFF',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#556B5D',
  },
  tabTextActive: {
    color: '#154A33',
  },
  contentGroup: {
    gap: 16,
  },
  section: {
    gap: 6,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#154A33',
  },
  paragraphText: {
    fontSize: 14,
    color: '#4A5568',
    lineHeight: 20,
  },
  bulletList: {
    gap: 6,
    marginTop: 2,
  },
  bulletRow: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'flex-start',
  },
  bullet: {
    fontSize: 16,
    color: '#154A33',
    lineHeight: 20,
  },
  bulletText: {
    flex: 1,
    fontSize: 14,
    color: '#4A5568',
    lineHeight: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E4EBDC',
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navIcon: {
    fontSize: 18,
  },
  navLabel: {
    fontSize: 11,
    color: '#556B5D',
    marginTop: 2,
  },
});