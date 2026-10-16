import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScreenProps } from '../App';

export default function ConfirmImageScreen({ goTo }: ScreenProps) {
  return (
    <View style={s.container}>
      <Text style={s.title}>Confirme sua imagem</Text>

      <View style={s.imageContainer}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=600' }}
          style={s.image}
          resizeMode="cover"
        />
      </View>

      <Text style={s.subtitle}>Verifique se a imagem está nítida e bem iluminada.</Text>

      <View style={s.buttonContainer}>
        {/* Botão Tirar outra foto -> Voltar para Captura */}
        <TouchableOpacity
          style={s.secondaryButton}
          activeOpacity={0.8}
          onPress={() => goTo('Capture')}
        >
          <Text style={s.secondaryButtonText}>Tirar outra foto</Text>
        </TouchableOpacity>

        {/* Botão Analisar imagem -> Ir para Processamento */}
        <TouchableOpacity
          style={s.primaryButton}
          activeOpacity={0.8}
          onPress={() => goTo('Processing')}
        >
          <Text style={s.primaryButtonText}>Analisar imagem</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F0',
    paddingHorizontal: 22,
    paddingTop: 40,
    paddingBottom: 28,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#154A33',
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 380,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#E4EBDC',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  subtitle: {
    fontSize: 13,
    color: '#4A5568',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '100%',
    gap: 12,
  },
  secondaryButton: {
    width: '100%',
    height: 48,
    backgroundColor: '#E4EBDC',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: '#154A33',
    fontSize: 15,
    fontWeight: '600',
  },
  primaryButton: {
    width: '100%',
    height: 48,
    backgroundColor: '#154A33',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});