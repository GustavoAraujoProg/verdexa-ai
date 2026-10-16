import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenProps, ScreenName } from '../App';
import { C } from '../components/UI';

interface Shortcut {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  screen: ScreenName;
}

const shortcuts: Shortcut[] = [
  { icon: 'document-text-outline', title: 'Histórico', screen: 'History' },
  { icon: 'grid-outline', title: 'Biblioteca', screen: 'DiseaseLibrary' },
  { icon: 'leaf-outline', title: 'Minhas plantas', screen: 'MyPlants' },
];

export default function HomeScreen({ goTo }: ScreenProps) {
  return (
    <View style={s.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Cabeçalho de Saudação */}
        <View style={s.top}>
          <View>
            <Text style={s.hello}>Olá, Marina!</Text>
            <Text style={s.sub}>O que vamos cuidar das suas plantas?</Text>
          </View>
          {/* Avatar -> Leva ao Perfil do Usuário */}
          <TouchableOpacity
            style={s.avatar}
            activeOpacity={0.7}
            onPress={() => goTo('Profile')}
          >
            <Ionicons name="person" size={20} color={C.green} />
          </TouchableOpacity>
        </View>

        {/* Card Principal: Analisar Planta */}
        <TouchableOpacity
          style={s.analyze}
          activeOpacity={0.8}
          onPress={() => goTo('Capture')}
        >
          <View style={s.camera}>
            <Ionicons name="camera-outline" size={24} color="#FFFFFF" />
          </View>
          <Text style={s.analyzeTitle}>Analisar planta</Text>
          <Text style={s.analyzeSub}>Tire uma foto ou escolha da galeria</Text>
        </TouchableOpacity>

        {/* Seção: Acessos Rápido */}
        <View style={s.quickHeader}>
          <Text style={s.section}>Acessos rápidos</Text>
        </View>

        <View style={s.quickRow}>
          {shortcuts.map((item) => (
            <TouchableOpacity
              key={item.title}
              style={s.quick}
              activeOpacity={0.7}
              onPress={() => goTo(item.screen)}
            >
              <Ionicons name={item.icon} size={22} color={C.green} />
              <Text style={s.quickText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Seção: Dica do dia */}
        <Text style={[s.section, { marginTop: 26, paddingHorizontal: 24 }]}>Dica do dia</Text>
        <View style={s.tip}>
          <Ionicons name="sunny-outline" size={26} color={C.green} />
          <View style={{ flex: 1, marginLeft: 12 }}>
            <Text style={s.tipTitle}>Observe as folhas</Text>
            <Text style={s.tipText}>
              Manchas e mudanças de cor podem indicar que sua planta precisa de atenção.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Barra de Navegação Inferior (Bottom Tab) */}
      <View style={s.nav}>
        <TouchableOpacity
          style={s.navItem}
          activeOpacity={0.7}
          onPress={() => goTo('Home')}
        >
          <Ionicons name="home-outline" size={20} color={C.green} />
          <Text style={[s.navText, { color: C.green }]}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={s.navItem}
          activeOpacity={0.7}
          onPress={() => goTo('History')}
        >
          <Ionicons name="time-outline" size={20} color={C.muted} />
          <Text style={s.navText}>Histórico</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={s.navItem}
          activeOpacity={0.7}
          onPress={() => goTo('Home')}
        >
          <Ionicons name="heart-outline" size={20} color={C.muted} />
          <Text style={s.navText}>Dicas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={s.navItem}
          activeOpacity={0.7}
          onPress={() => goTo('Profile')}
        >
          <Ionicons name="person-outline" size={20} color={C.muted} />
          <Text style={s.navText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: C.pale, paddingTop: 22 },
  top: { paddingHorizontal: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 },
  hello: { fontSize: 21, fontWeight: '600', color: C.text },
  sub: { fontSize: 11, color: C.muted, marginTop: 5 },
  avatar: { width: 38, height: 38, borderRadius: 20, backgroundColor: '#E2E9D9', alignItems: 'center', justifyContent: 'center' },
  analyze: { marginHorizontal: 22, backgroundColor: C.green, borderRadius: 18, padding: 22, alignItems: 'center', minHeight: 140, justifyContent: 'center' },
  camera: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#356B4A', alignItems: 'center', justifyContent: 'center', marginBottom: 10 },
  analyzeTitle: { color: '#FFFFFF', fontSize: 15, fontWeight: '600' },
  analyzeSub: { color: '#D9E6D9', fontSize: 11, marginTop: 5 },
  quickHeader: { paddingHorizontal: 24, marginTop: 26, marginBottom: 14 },
  section: { fontSize: 14, fontWeight: '600', color: C.text },
  quickRow: { flexDirection: 'row', paddingHorizontal: 18, gap: 10 },
  quick: { flex: 1, backgroundColor: '#EDF1E8', borderRadius: 14, minHeight: 82, alignItems: 'center', justifyContent: 'center', padding: 8 },
  quickText: { fontSize: 10, color: C.text, marginTop: 8 },
  tip: { marginHorizontal: 22, marginTop: 13, backgroundColor: '#EDF1E8', borderRadius: 14, padding: 16, flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  tipTitle: { fontSize: 12, fontWeight: '600', color: C.text },
  tipText: { fontSize: 11, color: C.muted, lineHeight: 17, marginTop: 4 },
  nav: { height: 64, borderTopWidth: 1, borderTopColor: C.line, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#F8F9F4' },
  navItem: { alignItems: 'center', gap: 4 },
  navText: { fontSize: 9, color: C.muted },
});