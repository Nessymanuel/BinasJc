import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { BASE_URL } from '../../../config';

interface Station {
  id: number;
  nome: string;
  latitude: number;
  longitude: number;
  totalBicicletas: number;
}

type StationScreenProps = {
  navigation: StackNavigationProp<any>;
};

export default function StationsScreen({ navigation }: StationScreenProps) {
  const [stations, setStations] = useState<Station[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Função para carregar as estações do backend
  const carregarEstacoes = async () => {
    try {
      const response = await fetch(`${BASE_URL}/Estacao`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      if (Array.isArray(data)) {
        setStations(data);
      } else {
        console.error("Dados recebidos não são um array:", data);
        setStations([]);
      }
    } catch (error) {
      console.error("Erro ao carregar estações:", error);
      Alert.alert("Erro", "Não foi possível carregar as estações.");
      setStations([]);
    }
  };

  useEffect(() => {
    carregarEstacoes();
  }, []);

  // Filtra as estações com base na pesquisa
  const filteredStations = stations.filter(station =>
    station.nome.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderStationItem = ({ item }: { item: Station }) => (
    <View style={styles.stationItem}>
      <Text style={styles.stationName}>{item.nome}</Text>
      <Text style={styles.stationLocation}>
        Latitude: {item.latitude}, Longitude: {item.longitude}
      </Text>
      <Text style={styles.stationBikes}>Total de Bicicletas: {item.totalBicicletas}</Text>
      <TouchableOpacity style={styles.mapButton} onPress={() => navigation.navigate('Map', { latitude: item.latitude, longitude: item.longitude })}>
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
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
