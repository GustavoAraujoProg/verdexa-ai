import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenProps } from '../App';
import { C } from '../components/UI';

export default function UserProfileScreen({ goTo }: ScreenProps) {
  return (
    <View style={s.page}>
      {/* Cabeçalho */}
      <View style={s.header}>
        <TouchableOpacity onPress={() => goTo('Home')} activeOpacity={0.7} style={s.backButton}>
          <Ionicons name="arrow-back" size={24} color="#154A33" />
        </TouchableOpacity>
        <Text style={s.headerTitle}>Meu Perfil</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
        {/* Card de Informações do Usuário */}
        <View style={s.profileCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400' }}
            style={s.avatar}
          />
          <View style={s.userInfo}>
            <Text style={s.userName}>Maria Silva</Text>
            <Text style={s.userEmail}>maria.silva@verdexa.com</Text>

            {/* Círculo Vermelho: Botão Editar Perfil -> vai para EditProfile */}
            <TouchableOpacity
              style={s.editButton}
              activeOpacity={0.8}
              onPress={() => goTo('EditProfile')}
            >
              <Text style={s.editButtonText}>Editar Perfil</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Seção: Conta e Segurança */}
        <Text style={s.sectionTitle}>Conta e Segurança</Text>
        <View style={s.menuGroup}>
          <TouchableOpacity style={s.menuItem} activeOpacity={0.7}>
            <Ionicons name="person-outline" size={20} color="#154A33" style={s.menuIcon} />
            <Text style={s.menuText}>Dados Pessoais</Text>
            <Ionicons name="chevron-forward" size={18} color="#8A9A86" />
          </TouchableOpacity>

          <View style={s.divider} />

          <TouchableOpacity style={s.menuItem} activeOpacity={0.7}>
            <Ionicons name="lock-closed-outline" size={20} color="#154A33" style={s.menuIcon} />
            <Text style={s.menuText}>Alterar Senha</Text>
            <Ionicons name="chevron-forward" size={18} color="#8A9A86" />
          </TouchableOpacity>
        </View>

        {/* Seção: Preferências */}
        <Text style={s.sectionTitle}>Preferências</Text>
        <View style={s.menuGroup}>
          {/* Círculo Amarelo: Notificações -> vai para Settings */}
          <TouchableOpacity
            style={s.menuItem}
            activeOpacity={0.7}
            onPress={() => goTo('Notifications')}
          >
            <Ionicons name="notifications-outline" size={20} color="#154A33" style={s.menuIcon} />
            <Text style={s.menuText}>Notificações</Text>
            <Ionicons name="chevron-forward" size={18} color="#8A9A86" />
          </TouchableOpacity>

          <View style={s.divider} />

          {/* Círculo Roxo: Idioma -> Mantido conforme está */}
          <TouchableOpacity style={s.menuItem} activeOpacity={0.7}>
            <Ionicons name="globe-outline" size={20} color="#154A33" style={s.menuIcon} />
            <Text style={s.menuText}>Idioma</Text>
            <Text style={s.menuValue}>Português (BR)</Text>
          </TouchableOpacity>
        </View>

        {/* Seção: Suporte */}
        <Text style={s.sectionTitle}>Suporte</Text>
        <View style={s.menuGroup}>
          <TouchableOpacity style={s.menuItem} activeOpacity={0.7}>
            <Ionicons name="help-circle-outline" size={20} color="#154A33" style={s.menuIcon} />
            <Text style={s.menuText}>Ajuda & FAQ</Text>
            <Ionicons name="chevron-forward" size={18} color="#8A9A86" />
          </TouchableOpacity>

          <View style={s.divider} />

          <TouchableOpacity style={s.menuItem} activeOpacity={0.7}>
            <Ionicons name="document-text-outline" size={20} color="#154A33" style={s.menuIcon} />
            <Text style={s.menuText}>Termos e Privacidade</Text>
            <Ionicons name="chevron-forward" size={18} color="#8A9A86" />
          </TouchableOpacity>
        </View>

        {/* Botão Sair da Conta */}
        <TouchableOpacity style={s.logoutButton} activeOpacity={0.8} onPress={() => goTo('Home')}>
          <Text style={s.logoutButtonText}>Sair da Conta</Text>
        </TouchableOpacity>
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
          <Ionicons name="person" size={20} color={C.green} />
          <Text style={[s.navText, { color: C.green, fontWeight: '600' }]}>Perfil</Text>
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
  profileCard: {
    flexDirection: 'row',
    backgroundColor: '#E4EBDC',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: { width: 70, height: 70, borderRadius: 35 },
  userInfo: { flex: 1, marginLeft: 14 },
  userName: { fontSize: 18, fontWeight: '700', color: '#154A33' },
  userEmail: { fontSize: 12, color: '#4A5568', marginTop: 2 },
  editButton: {
    backgroundColor: '#154A33',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  editButtonText: { color: '#FFFFFF', fontSize: 11, fontWeight: '600' },
  sectionTitle: { fontSize: 14, fontWeight: '700', color: '#154A33', marginBottom: 10, marginTop: 4 },
  menuGroup: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingHorizontal: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#EAEFE6',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },
  menuIcon: { marginRight: 12 },
  menuText: { flex: 1, fontSize: 14, color: '#2D3748', fontWeight: '500' },
  menuValue: { fontSize: 12, color: '#A0AEC0' },
  divider: { height: 1, backgroundColor: '#EDF2F7' },
  logoutButton: {
    backgroundColor: '#FDE8E8',
    borderRadius: 24,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  logoutButtonText: { color: '#E53E3E', fontSize: 15, fontWeight: '600' },
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