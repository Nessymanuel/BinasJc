// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'; // Certifique-se de que este caminho está correto

// Definição da interface para os itens da lista de bicicletas
interface Bike {
  id: string;
  name: string;
  station: string;
}

export default function HomeScreen() {
  // Exemplo de dados para bicicletas disponíveis
  const availableBikes: Bike[] = [
    { id: '1', name: 'Bicicleta 1', station: 'Estação A' },
    { id: '2', name: 'Bicicleta 2', station: 'Estação B' },
    // Adicione mais bicicletas conforme necessário
  ];

  const handleStartCycling = () => {
    // Lógica para iniciar o rastreamento
    console.log('Iniciando rastreamento...');
  };

  const renderBikeItem = ({ item }: { item: Bike }) => (
    <View style={styles.bikeItem}>
      <Text>{item.name} - {item.station}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BinasJC</Text>
        <TouchableOpacity>
          <Ionicons name="person" size={24} color="#FF69B4" />
        </TouchableOpacity>
      </View>
      <Text style={styles.score}>Pontuação Atual: 100 pontos</Text>
      <Button title="Iniciar Ciclismo" onPress={handleStartCycling} color="#FF69B4" />
      <Text style={styles.subTitle}>Bicicletas Disponíveis:</Text>
      <FlatList
        data={availableBikes}
        renderItem={renderBikeItem}
        keyExtractor={item => item.id}
      />
      
    </View>
  );
}
