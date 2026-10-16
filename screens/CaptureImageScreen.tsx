import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScreenProps } from '../App';

export default function CaptureImageScreen({ goTo }: ScreenProps) {
  return (
    <View style={s.page}>
      {/* Cabeçalho */}
      <View style={s.header}>
        <TouchableOpacity onPress={() => goTo('Home')} activeOpacity={0.7}>
          <Ionicons name="close" size={25} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={s.title}>Capturar imagem</Text>
        <Ionicons name="flash-outline" size={22} color="#FFFFFF" />
      </View>

      {/* Área da Câmera */}
      <View style={s.cameraArea}>
        <View style={s.leaf}>
          <Ionicons name="leaf" size={150} color="#7FA56A" />
          <Ionicons name="leaf" size={70} color="#C0D4A5" style={s.leafSmall} />
        </View>
        <View style={[s.corner, s.tl]} />
        <View style={[s.corner, s.tr]} />
        <View style={[s.corner, s.bl]} />
        <View style={[s.corner, s.br]} />
      </View>

      <Text style={s.hint}>Posicione a folha dentro da área indicada.</Text>

      {/* Controles de Captura */}
      <View style={s.controls}>
        {/* Botão da Galeria -> Vai para ConfirmImage */}
        <TouchableOpacity
          style={s.side}
          activeOpacity={0.7}
          onPress={() => goTo('ConfirmImage')}
        >
          <Ionicons name="images-outline" size={23} color="#FFFFFF" />
        </TouchableOpacity>

        {/* Botão de Captura (Obturador) -> Vai para ConfirmImage */}
        <TouchableOpacity
          style={s.shutter}
          activeOpacity={0.8}
          onPress={() => goTo('ConfirmImage')}
        >
          <View style={s.shutterInner} />
        </TouchableOpacity>

        {/* Botão do Flash */}
        <TouchableOpacity style={s.side} activeOpacity={0.7}>
          <Ionicons name="flash-outline" size={23} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <Text style={s.bottomHint}>Mantenha a folha nítida e bem iluminada</Text>
    </View>
  );
}

const s = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#101A13',
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 28,
  },
  header: {
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  cameraArea: {
    flex: 1,
    marginTop: 22,
    marginBottom: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#7B987B',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#203A29',
  },
  leaf: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#294A32',
  },
  leafSmall: {
    position: 'absolute',
    top: 70,
    right: 65,
    transform: [{ rotate: '45deg' }],
  },
  corner: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderColor: '#FFFFFF',
    borderWidth: 3,
  },
  tl: { top: 16, left: 16, borderRightWidth: 0, borderBottomWidth: 0 },
  tr: { top: 16, right: 16, borderLeftWidth: 0, borderBottomWidth: 0 },
  bl: { bottom: 16, left: 16, borderRightWidth: 0, borderTopWidth: 0 },
  br: { bottom: 16, right: 16, borderLeftWidth: 0, borderTopWidth: 0 },
  hint: {
    textAlign: 'center',
    fontSize: 11,
    color: '#D5DFD4',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 24,
  },
  side: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#2A3B2D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shutter: {
    width: 66,
    height: 66,
    borderRadius: 33,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shutterInner: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#F7F8F2',
  },
  bottomHint: {
    textAlign: 'center',
    color: '#9FAFA0',
    fontSize: 10,
    marginTop: 20,
  },
});