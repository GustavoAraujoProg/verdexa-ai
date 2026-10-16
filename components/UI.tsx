import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ViewStyle, TextStyle, TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const C = { green: '#124D32', green2: '#1C6542', pale: '#F5F7EF', text: '#20352A', muted: '#829087', line: '#E2E7DD', white: '#FFFFFF', soft: '#E8EEDF' };
export function Brand({ light = false }: { light?: boolean }) {
  return <View style={ui.brand}><Ionicons name="leaf" size={34} color={light ? '#F5F7EF' : C.green} /><Text style={[ui.brandText, light && { color: '#FFFFFF' }]}>Verdexa</Text></View>;
}
export function Button({ title, onPress, secondary = false, style }: { title: string; onPress: () => void; secondary?: boolean; style?: ViewStyle }) {
  return <TouchableOpacity onPress={onPress} activeOpacity={0.85} style={[ui.button, secondary && ui.buttonSecondary, style]}><Text style={[ui.buttonText, secondary && ui.buttonSecondaryText]}>{title}</Text></TouchableOpacity>;
}
export function Field({ label, placeholder, secureTextEntry, icon, ...props }: TextInputProps & { label: string; icon?: keyof typeof Ionicons.glyphMap }) {
  return <View style={ui.fieldWrap}><Text style={ui.label}>{label}</Text><View style={ui.inputRow}><TextInput placeholder={placeholder} placeholderTextColor="#A6AEA5" secureTextEntry={secureTextEntry} style={ui.input} {...props} />{icon ? <Ionicons name={icon} size={18} color={C.muted} /> : null}</View></View>;
}
export function Header({ title, onBack }: { title: string; onBack: () => void }) {
  return <View style={ui.header}><TouchableOpacity onPress={onBack} style={ui.back}><Ionicons name="chevron-back" size={22} color={C.text} /></TouchableOpacity><Text style={ui.headerTitle}>{title}</Text></View>;
}
export function LeafArt({ variant = 0 }: { variant?: number }) {
  return <View style={ui.art}><View style={[ui.artCircle, variant === 1 && { transform: [{ rotate: '12deg' }] }]}><Ionicons name="leaf" size={96} color={variant === 2 ? '#527B48' : '#356B43'} /><Ionicons name="leaf" size={52} color="#8EAC72" style={ui.smallLeaf} /></View></View>;
}
export const ui = StyleSheet.create({
  page: { flex: 1, paddingHorizontal: 26, paddingTop: 18, paddingBottom: 18, backgroundColor: C.pale },
  brand: { alignItems: 'center', justifyContent: 'center', gap: 3 },
  brandText: { fontSize: 26, color: C.green, fontWeight: '500', letterSpacing: -0.7 },
  button: { backgroundColor: C.green, minHeight: 48, borderRadius: 25, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 18 },
  buttonText: { color: '#FFFFFF', fontSize: 14, fontWeight: '600' },
  buttonSecondary: { backgroundColor: '#E9EEE5' },
  buttonSecondaryText: { color: C.green },
  fieldWrap: { marginBottom: 14 },
  label: { color: '#405348', fontSize: 12, marginBottom: 6 },
  inputRow: { minHeight: 45, borderRadius: 10, borderWidth: 1, borderColor: C.line, backgroundColor: '#F8F9F4', paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center' },
  input: { flex: 1, color: C.text, fontSize: 13, paddingVertical: 10 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 24 },
  back: { width: 30, height: 30, justifyContent: 'center' },
  headerTitle: { fontSize: 17, fontWeight: '600', color: C.text, marginLeft: 8 },
  art: { height: 210, borderRadius: 24, backgroundColor: '#E8EDDF', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', marginBottom: 24 },
  artCircle: { width: 150, height: 150, borderRadius: 30, backgroundColor: '#D6E2C8', alignItems: 'center', justifyContent: 'center', transform: [{ rotate: '-8deg' }] },
  smallLeaf: { position: 'absolute', right: 8, top: 10, transform: [{ rotate: '35deg' }] }
});
