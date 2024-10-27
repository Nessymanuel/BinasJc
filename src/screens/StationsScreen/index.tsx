// src/screens/StationsScreen.tsx
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { StackNavigationProp } from '@react-navigation/stack';

// Definindo o tipo para as estações
interface Station {
  id: string;
  name: string;
  location: string;
}

// Definindo o tipo de navegação
type StationScreenProps = {
  navigation: StackNavigationProp<any>; // Use um tipo mais específico se possível
};

const stations: Station[] = [
  { id: '1', name: 'Estação Central', location: 'Rua Principal, 123' },
  { id: '2', name: 'Estação Norte', location: 'Avenida das Nações, 456' },
  { id: '3', name: 'Estação Sul', location: 'Praça do Comércio, 789' },
];

// Adicione o tipo de props ao componente
export default function StationsScreen({ navigation }: StationScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrando as estações com base na pesquisa
  const filteredStations = stations.filter(station =>
    station.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Definindo o tipo do item no FlatList
  const renderStationItem = ({ item }: { item: Station }) => (
    <View style={styles.stationItem}>
      <Text style={styles.stationName}>{item.name}</Text>
      <Text style={styles.stationLocation}>{item.location}</Text>
      <TouchableOpacity style={styles.mapButton} onPress={() => navigation.navigate('Map')}>
        <Text style={styles.mapButtonText}>Ver no Mapa</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Estações Disponíveis</Text>
      
      {/* Campo de pesquisa */}
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar Estações"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      
      <FlatList
        data={filteredStations}
        renderItem={renderStationItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
