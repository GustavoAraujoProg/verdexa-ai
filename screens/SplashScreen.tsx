import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenProps } from '../App';
import { Button, C } from '../components/UI';

export default function SplashScreen({ goTo }: ScreenProps) {
  return <View style={s.bg}>
    <View style={s.leaves}><Ionicons name="leaf" size={230} color="#315B35" /><Ionicons name="leaf" size={145} color="#20482C" style={s.leaf2}/></View>
    <View style={s.bottom}><View style={s.logo}><Ionicons name="leaf" size={36} color="#F5F7EF" /><Text style={s.name}>Verdexa</Text></View>
      <Text style={s.tag}>Conheça sua planta.</Text><Text style={s.tag}>Cuide melhor.</Text>
      <View style={s.progress}><View style={s.progressOn}/><View style={s.progressOff}/></View>
      <Button title="Começar" onPress={() => goTo('Onboarding1')} style={s.start}/>
    </View>
  </View>;
}
const s = StyleSheet.create({ bg: { flex: 1, backgroundColor: '#183E27', justifyContent: 'space-between', padding: 28 }, leaves: { position: 'absolute', top: 45, left: -50, opacity: .9, transform: [{ rotate: '-30deg' }] }, leaf2: { position: 'absolute', top: 90, left: 115, transform: [{ rotate: '70deg' }] }, bottom: { flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 30 }, logo: { alignItems: 'center', marginBottom: 16 }, name: { fontSize: 30, color: '#F5F7EF', fontWeight: '500' }, tag: { color: '#F5F7EF', fontSize: 15, lineHeight: 22 }, progress: { marginTop: 48, flexDirection: 'row', gap: 7, alignItems: 'center' }, progressOn: { width: 36, height: 3, backgroundColor: '#FFFFFF' }, progressOff: { width: 24, height: 2, backgroundColor: '#719078' }, start: { width: '100%', marginTop: 22, backgroundColor: '#F5F7EF' } });
