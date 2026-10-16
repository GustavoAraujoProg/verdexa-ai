import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { ScreenProps } from '../App';

export default function NotificationsScreen({ goTo }: ScreenProps) {
  const [unreadOnly, setUnreadOnly] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F6F0" />

      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={() => goTo('Profile')}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Notificações</Text>
        <TouchableOpacity style={styles.markReadButton} activeOpacity={0.7}>
          <Text style={styles.markReadText}>Lidas</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Seção: Hoje */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hoje</Text>

          {/* Notificação 1 (Não lida) */}
          <TouchableOpacity
            style={[styles.notificationCard, styles.unreadCard]}
            activeOpacity={0.8}
            onPress={() => goTo('DiagnosisResult')}
          >
            <View style={styles.iconContainerWarning}>
              <Text style={styles.notificationIcon}>⚠️</Text>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <Text style={styles.notificationTitle}>Diagnóstico Concluído</Text>
                <Text style={styles.timeText}>Há 10 min</Text>
              </View>
              <Text style={styles.notificationBody}>
                Detectamos Mancha-alvo em seu Tomateiro Estufa 1. Clique para ver as recomendações.
              </Text>
            </View>
            <View style={styles.unreadDot} />
          </TouchableOpacity>

          {/* Notificação 2 (Não lida) */}
          <TouchableOpacity
            style={[styles.notificationCard, styles.unreadCard]}
            activeOpacity={0.8}
            onPress={() => goTo('MyPlants')}
          >
            <View style={styles.iconContainerInfo}>
              <Text style={styles.notificationIcon}>💧</Text>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <Text style={styles.notificationTitle}>Lembrete de Rega</Text>
                <Text style={styles.timeText}>Há 2h</Text>
              </View>
              <Text style={styles.notificationBody}>
                Hoje é dia de irrigar o Talhão de Videira Niagara.
              </Text>
            </View>
            <View style={styles.unreadDot} />
          </TouchableOpacity>
        </View>

        {/* Seção: Anteriores */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Anteriores</Text>

          {/* Notificação 3 (Lida) */}
          <TouchableOpacity
            style={styles.notificationCard}
            activeOpacity={0.8}
            onPress={() => goTo('DiseaseLibrary')}
          >
            <View style={styles.iconContainerSuccess}>
              <Text style={styles.notificationIcon}>💡</Text>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <Text style={styles.notificationTitle}>Dica de Cultivo</Text>
                <Text style={styles.timeText}>Ontem</Text>
              </View>
              <Text style={styles.notificationBody}>
                Confira o novo artigo na Biblioteca sobre prevenção de Míldio em períodos chuvosos.
              </Text>
            </View>
          </TouchableOpacity>

          {/* Notificação 4 (Lida) */}
          <TouchableOpacity
            style={styles.notificationCard}
            activeOpacity={0.8}
            onPress={() => goTo('Home')}
          >
            <View style={styles.iconContainerSystem}>
              <Text style={styles.notificationIcon}>🚀</Text>
            </View>
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <Text style={styles.notificationTitle}>Atualização do Verdexa</Text>
                <Text style={styles.timeText}>12/10/2026</Text>
              </View>
              <Text style={styles.notificationBody}>
                A IA de reconhecimento de pragas ficou ainda mais rápida e precisa!
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  backButton: {
    padding: 4,
  },
  backIcon: {
    fontSize: 22,
    fontWeight: '600',
    color: '#154A33',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#154A33',
    textAlign: 'center',
  },
  markReadButton: {
    padding: 4,
  },
  markReadText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#154A33',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    gap: 16,
  },
  section: {
    gap: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#154A33',
    marginLeft: 4,
  },
  notificationCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    alignItems: 'flex-start',
    gap: 12,
    borderWidth: 1,
    borderColor: '#E4EBDC',
    position: 'relative',
  },
  unreadCard: {
    backgroundColor: '#F7FAF5',
    borderColor: '#C3D6B5',
  },
  iconContainerWarning: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#FFF3CD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainerInfo: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#E2F0FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainerSuccess: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#E4EBDC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainerSystem: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#EDF2F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationIcon: {
    fontSize: 16,
  },
  cardContent: {
    flex: 1,
    gap: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notificationTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#154A33',
  },
  timeText: {
    fontSize: 11,
    color: '#8A9A86',
  },
  notificationBody: {
    fontSize: 12,
    color: '#4A5568',
    lineHeight: 17,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#154A33',
    position: 'absolute',
    top: 12,
    right: 12,
  },
});