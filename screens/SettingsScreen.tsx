import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Switch,
} from 'react-native';
import { ScreenProps } from '../App';

export default function SettingsScreen({ goTo }: ScreenProps) {
  const [notifications, setNotifications] = useState(true);
  const [wateringReminders, setWateringReminders] = useState(true);
  const [darkTheme, setDarkTheme] = useState(false);
  const [offlineMode, setOfflineMode] = useState(false);

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
        <Text style={styles.title}>Configurações</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Seção: Notificações */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notificações</Text>
          <View style={styles.card}>
            <View style={styles.switchRow}>
              <View style={styles.rowTextGroup}>
                <Text style={styles.rowTitle}>Alertas de Pragas e Doenças</Text>
                <Text style={styles.rowSubtitle}>Notificações sobre diagnósticos e surtos locais</Text>
              </View>
              <Switch
                value={notifications}
                onValueChange={setNotifications}
                trackColor={{ false: '#CBD5E0', true: '#154A33' }}
                thumbColor="#FFFFFF"
              />
            </View>

            <View style={styles.divider} />

            <View style={styles.switchRow}>
              <View style={styles.rowTextGroup}>
                <Text style={styles.rowTitle}>Lembretes de Manejo</Text>
                <Text style={styles.rowSubtitle}>Avisos de rega, adubação e tratamentos</Text>
              </View>
              <Switch
                value={wateringReminders}
                onValueChange={setWateringReminders}
                trackColor={{ false: '#CBD5E0', true: '#154A33' }}
                thumbColor="#FFFFFF"
              />
            </View>
          </View>
        </View>

        {/* Seção: Preferências do Sistema */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Aparência e Conexão</Text>
          <View style={styles.card}>
            <View style={styles.switchRow}>
              <View style={styles.rowTextGroup}>
                <Text style={styles.rowTitle}>Tema Escuro</Text>
                <Text style={styles.rowSubtitle}>Alternar para visual escuro</Text>
              </View>
              <Switch
                value={darkTheme}
                onValueChange={setDarkTheme}
                trackColor={{ false: '#CBD5E0', true: '#154A33' }}
                thumbColor="#FFFFFF"
              />
            </View>

            <View style={styles.divider} />

            <View style={styles.switchRow}>
              <View style={styles.rowTextGroup}>
                <Text style={styles.rowTitle}>Modo Offline</Text>
                <Text style={styles.rowSubtitle}>Guardar dados para uso sem internet</Text>
              </View>
              <Switch
                value={offlineMode}
                onValueChange={setOfflineMode}
                trackColor={{ false: '#CBD5E0', true: '#154A33' }}
                thumbColor="#FFFFFF"
              />
            </View>
          </View>
        </View>

        {/* Seção: Privacidade e Conta */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Privacidade e Dados</Text>
          <View style={styles.card}>
            <TouchableOpacity style={styles.linkRow} activeOpacity={0.7}>
              <Text style={styles.linkText}>Termos de Uso</Text>
              <Text style={styles.arrowIcon}>›</Text>
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity style={styles.linkRow} activeOpacity={0.7}>
              <Text style={styles.linkText}>Política de Privacidade</Text>
              <Text style={styles.arrowIcon}>›</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Opção Destrutiva */}
        <TouchableOpacity style={styles.deleteButton} activeOpacity={0.7}>
          <Text style={styles.deleteButtonText}>Excluir Minha Conta</Text>
        </TouchableOpacity>
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
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    gap: 16,
  },
  section: {
    gap: 6,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#154A33',
    marginLeft: 4,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 4,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#E4EBDC',
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  rowTextGroup: {
    flex: 1,
    paddingRight: 10,
  },
  rowTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D3748',
  },
  rowSubtitle: {
    fontSize: 11,
    color: '#8A9A86',
    marginTop: 2,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  linkText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2D3748',
  },
  arrowIcon: {
    fontSize: 18,
    color: '#8A9A86',
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#F4F6F0',
  },
  deleteButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    marginTop: 8,
  },
  deleteButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#E53E3E',
  },
});