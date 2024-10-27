// src/screens/CyclistsScreen.tsx
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';

// Definindo o tipo para os ciclistas
interface Cyclist {
  id: string;
  name: string;
  score: number;
}

const cyclists: Cyclist[] = [
  { id: '1', name: ' Ana Gourgel', score: 120 },
  { id: '2', name: ' Gracieth Manuel', score: 95 },
  { id: '3', name: ' Rafael Pires', score: 150 },
  { id: '4', name: ' João Costa', score: 80 },
];

export default function CyclistsScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrando ciclistas com base na pesquisa
  const filteredCyclists = cyclists.filter(cyclist =>
    cyclist.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Definindo o tipo do item no FlatList
  const renderCyclistItem = ({ item }: { item: Cyclist }) => (
    <View style={styles.cyclistItem}>
      <Text style={styles.cyclistName}>{item.name}</Text>
      <Text style={styles.cyclistScore}>Pontuação: {item.score}</Text>
      <TouchableOpacity style={styles.messageButton}>
        <Text style={styles.messageButtonText}>Enviar Mensagem</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ciclistas Disponíveis</Text>
      
      {/* Campo de pesquisa */}
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar Ciclistas"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      
      <FlatList
        data={filteredCyclists}
        renderItem={renderCyclistItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
