import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { ScreenProps } from '../App';

export default function ProcessingScreen({ goTo }: Partial<ScreenProps>) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F6F0" />

      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Analisando sua planta...</Text>
      </View>

      {/* Card da Planta com Efeito de Escanear */}
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800' }}
          style={styles.plantImage}
          resizeMode="cover"
        />
        {/* Quadrado do Scanner */}
        <View style={styles.scannerOverlay}>
          <View style={[styles.corner, styles.topLeft]} />
          <View style={[styles.corner, styles.topRight]} />
          <View style={[styles.corner, styles.bottomLeft]} />
          <View style={[styles.corner, styles.bottomRight]} />
        </View>
      </View>

      {/* Indicador de Progresso Circular (45%) */}
      <View style={styles.progressSection}>
        <View style={styles.circleOuter}>
          <View style={styles.circleInner}>
            <Text style={styles.progressText}>45%</Text>
          </View>
        </View>
      </View>

      {/* Lista de Passos da Análise */}
      <View style={styles.stepsContainer}>
        <View style={styles.stepRow}>
          <View style={[styles.checkCircle, styles.checkCircleActive]}>
            <Text style={styles.checkIconActive}>✓</Text>
          </View>
          <Text style={styles.stepTextActive}>Identificando o plante</Text>
        </View>

        <View style={styles.stepRow}>
          <View style={styles.checkCirclePending}>
            <Text style={styles.checkIconPending}>○</Text>
          </View>
          <Text style={styles.stepTextPending}>Analisando sintomas</Text>
        </View>

        <View style={styles.stepRow}>
          <View style={styles.checkCirclePending}>
            <Text style={styles.checkIconPending}>○</Text>
          </View>
          <Text style={styles.stepTextPending}>Consultando no banco de dados</Text>
        </View>

        <View style={styles.stepRow}>
          <View style={styles.checkCirclePending}>
            <Text style={styles.checkIconPending}>○</Text>
          </View>
          <Text style={styles.stepTextPending}>Gerando resultado</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F0', // Off-white padrão do Verdexa
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  header: {
    marginTop: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#154A33',
    textAlign: 'center',
  },
  cardContainer: {
    width: '100%',
    height: 220,
    borderRadius: 24,
    backgroundColor: '#E4EBDC',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  plantImage: {
    width: '100%',
    height: '100%',
  },
  scannerOverlay: {
    position: 'absolute',
    width: 140,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  corner: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderColor: '#FFFFFF',
  },
  topLeft: {
    top: 0,
    left: 0,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderTopLeftRadius: 6,
  },
  topRight: {
    top: 0,
    right: 0,
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderTopRightRadius: 6,
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderBottomLeftRadius: 6,
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderBottomRightRadius: 6,
  },
  progressSection: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  circleOuter: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 6,
    borderColor: '#154A33',
    borderLeftColor: '#E4EBDC', // Simula o anel de carregamento em 45%
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleInner: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#154A33',
  },
  stepsContainer: {
    gap: 14,
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  checkCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkCircleActive: {
    backgroundColor: '#154A33',
  },
  checkCirclePending: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkIconActive: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  checkIconPending: {
    color: '#8A9A86',
    fontSize: 14,
  },
  stepTextActive: {
    fontSize: 15,
    fontWeight: '600',
    color: '#154A33',
  },
  stepTextPending: {
    fontSize: 15,
    color: '#718096',
  },
});