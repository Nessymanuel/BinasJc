// src/screens/CyclistsScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Alert } from 'react-native';
import styles from './styles';
import { BASE_URL } from '../../../config';

interface User {
  id: string;
  nome: string;
  pontuacaoTotal: number;
}

export default function CyclistsScreen() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Função para carregar os usuários do backend
  const carregarUsuarios = async () => {
    try {
      const response = await fetch(`${BASE_URL}/User`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      if (Array.isArray(data)) {
        setUsers(data); // Atualiza o estado com os usuários recebidos
      } else {
        console.error('Dados recebidos não são um array:', data);
        setUsers([]); // Caso os dados não sejam um array válido
      }
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
      Alert.alert('Erro', 'Não foi possível carregar os usuários.');
      setUsers([]); // Limpa a lista caso haja erro
    }
  };

  useEffect(() => {
    carregarUsuarios(); // Chama a função para carregar os usuários assim que a tela é carregada
  }, []);

  // Filtrando usuários com base na pesquisa
  const filteredUsers = users.filter(user =>
    user.nome.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Definindo o tipo do item no FlatList
  const renderUserItem = ({ item }: { item: User }) => (
    <View style={styles.cyclistItem}>
      <Text style={styles.cyclistName}>{item.nome}</Text>
      <Text style={styles.cyclistScore}>Pontuação: {item.pontuacaoTotal}</Text>
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
        data={filteredUsers}
        renderItem={renderUserItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
