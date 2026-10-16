import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import { ScreenProps } from '../App';

export default function AddPlantScreen({ goTo }: ScreenProps) {
  const [plantName, setPlantName] = useState('');
  const [species, setSpecies] = useState('');
  const [location, setLocation] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F4F6F0" />

      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.7}
          onPress={() => goTo('MyPlants')}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Cadastrar Planta</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Seção de Upload / Foto da Planta */}
        <View style={styles.photoContainer}>
          <TouchableOpacity style={styles.photoPicker} activeOpacity={0.8}>
            <Text style={styles.photoIcon}>📷</Text>
            <Text style={styles.photoText}>Adicionar foto da planta</Text>
          </TouchableOpacity>
        </View>

        {/* Formulário */}
        <View style={styles.formGroup}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Nome ou Identificação</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Tomateiro Estufa 1"
              placeholderTextColor="#8A9A86"
              value={plantName}
              onChangeText={setPlantName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Cultura / Espécie</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Tomate (Solanum lycopersicum)"
              placeholderTextColor="#8A9A86"
              value={species}
              onChangeText={setSpecies}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Localização ou Talhão (Opcional)</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Estufa Principal / Setor Norte"
              placeholderTextColor="#8A9A86"
              value={location}
              onChangeText={setLocation}
            />
          </View>
        </View>

        {/* Botão de Ação */}
        <TouchableOpacity
          style={styles.saveButton}
          activeOpacity={0.8}
          onPress={() => goTo('MyPlants')}
        >
          <Text style={styles.saveButtonText}>Salvar Planta</Text>
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
    gap: 20,
  },
  photoContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  photoPicker: {
    width: '100%',
    height: 160,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#E4EBDC',
    borderStyle: 'dashed',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  photoIcon: {
    fontSize: 32,
  },
  photoText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#556B5D',
  },
  formGroup: {
    gap: 16,
  },
  inputContainer: {
    gap: 6,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#154A33',
    marginLeft: 4,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#154A33',
    borderWidth: 1,
    borderColor: '#E4EBDC',
  },
  saveButton: {
    width: '100%',
    height: 52,
    borderRadius: 26,
    backgroundColor: '#154A33',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});