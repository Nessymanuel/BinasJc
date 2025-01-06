import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';
import { BASE_URL } from '../../../config';

// Definindo o tipo de rotas
type RootStackParamList = {
  Home: undefined;
  Destino: undefined;
  Iniciar: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'Destino'>;

interface Station {
  id: number;
  nome: string;
  totalBicicletas: number; // Agora tem o campo de número de bicicletas
}

const DestinationScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();

  const [selectedDeparture, setSelectedDeparture] = useState<Station | null>(null);
  const [stations, setStations] = useState<Station[]>([]); // Lista de estações carregada do backend

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
        setStations(data); // Atualiza o estado com as estações recebidas
      } else {
        console.error("Dados recebidos não são um array:", data);
        setStations([]); // Limpa as estações caso o retorno não seja um array
      }
    } catch (error) {
      console.error("Erro ao carregar estações:", error);
      Alert.alert("Erro", "Não foi possível carregar as estações.");
      setStations([]); // Limpa as estações em caso de erro
    }
  };

  // Carregar as estações ao montar o componente
  useEffect(() => {
    carregarEstacoes();
  }, []);

  const handleStationSelect = (station: Station) => {
    setSelectedDeparture(station);
  };

  const handleConfirmReservation = async () => {
    if (selectedDeparture && selectedDeparture.totalBicicletas > 0) {
      try {
        const newBikeCount = selectedDeparture.totalBicicletas - 1;
  
        // Criar a reserva no backend
        const reservation = {
          usuarioId: 1, // Exemplo: você pode substituir por um valor dinâmico
          bicicletaId: 1, // Exemplo: id da bicicleta (pode ser calculado ou selecionado)
          estacaoId: selectedDeparture.id,
          dataReserva: new Date().toISOString(),
        };
  
        const response = await fetch(`${BASE_URL}/Reserva`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reservation),
        });
  
        if (response.ok) {
          // Atualizar o número de bicicletas no servidor usando o PUT
          const stationUpdate = {
            ...selectedDeparture,
            totalBicicletas: newBikeCount,
          };
  
          const updateResponse = await fetch(`${BASE_URL}/Estacao/${selectedDeparture.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(stationUpdate),
          });
  
          if (updateResponse.ok) {
            // Atualizar a estação localmente, diminuindo o número de bicicletas
            const updatedStations = stations.map(station =>
              station.id === selectedDeparture.id
                ? { ...station, totalBicicletas: newBikeCount }
                : station
            );
            setStations(updatedStations); // Atualiza o estado com a nova quantidade de bicicletas
  
            // Confirmar a reserva
            Alert.alert(
              'Reserva Confirmada',
              `Partida: ${selectedDeparture.nome}\nBicicleta reservada!`,
              [
                {
                  text: 'OK',
                  onPress: () => navigation.navigate('Iniciar'), // Navega para a rota "Iniciar"
                },
              ]
            );
          } else {
            Alert.alert('Erro', 'Não foi possível atualizar a estação.');
          }
        } else {
          Alert.alert('Erro', 'Não foi possível criar a reserva.');
        }
      } catch (error) {
        console.error('Erro ao fazer a reserva:', error);
        Alert.alert('Erro', 'Ocorreu um erro ao fazer a reserva.');
      }
    } else {
      Alert.alert('Erro', 'Não há bicicletas disponíveis para reserva.');
    }
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <MaterialIcons name="close" size={28} color="#FF69B4" />
        </TouchableOpacity>
        <Text style={styles.headerText}>PARA ONDE VAIS?</Text>
      </View>

      <View style={styles.currentLocationContainer}>
        <FontAwesome name="dot-circle-o" size={26} color="#FF69B4" />
        <Text style={styles.locationText}>Selecionar estação de partida</Text>
        <ScrollView horizontal style={styles.stationSelector}>
          {stations.length > 0 ? (
            stations.map((station, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.stationItem,
                  selectedDeparture?.id === station.id && styles.selectedStation,
                ]}
                onPress={() => handleStationSelect(station)}
              >
                <Text style={styles.stationName}>{station.nome}</Text>
                <Text style={styles.stationName}>
                  Bicicletas Disponíveis: {station.totalBicicletas}
                </Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.stationName}>Carregando estações...</Text>
          )}
        </ScrollView>
      </View>

      <View style={styles.divider} />

      <TouchableOpacity
        style={[styles.confirmButton, !selectedDeparture && styles.disabledButton]}
        onPress={handleConfirmReservation}
        disabled={!selectedDeparture || selectedDeparture.totalBicicletas <= 0}
      >
        <Text style={styles.confirmButtonText}>Confirmar Reserva</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DestinationScreen;
