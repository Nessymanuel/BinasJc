import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Modal } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';

// Definindo o tipo de navegação da tela
type HomeScreenProps = {
  navigation: StackNavigationProp<any>; // Usando StackNavigationProp para navegação
};

interface Station {
  id: number;
  latitude: number;
  longitude: number;
  availableBikes: number;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);

  const stations: Station[] = [
    { id: 1, latitude: -8.8395, longitude: 13.2902, availableBikes: 5 },
    { id: 2, latitude: -8.8400, longitude: 13.2910, availableBikes: 3 },
    { id: 3, latitude: -8.8385, longitude: 13.2890, availableBikes: 2 },
    { id: 4, latitude: -8.8398, longitude: 13.2885, availableBikes: 4 },
    { id: 5, latitude: -8.8392, longitude: 13.2908, availableBikes: 1 },
  ];

  const handleStationPress = (station: Station) => {
    setSelectedStation(station);
    setModalVisible(true);
  };

  const handleReservation = () => {
    navigation.navigate('Destino'); // Navegar para a tela "Destino" ao reservar
    setModalVisible(false);
  };

  // Função para navegar para "Destino" ao focar no TextInput
  const handleInputFocus = () => {
    navigation.navigate('Destino'); // Navegar para "Destino" ao focar no campo de texto
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BinasJC</Text>
      </View>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -8.839988,
          longitude: 13.289437,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        {stations.map((station) => (
          <Marker
            key={station.id}
            coordinate={{ latitude: station.latitude, longitude: station.longitude }}
            onPress={() => handleStationPress(station)}
          >
            <Image source={require('./bicicleta.png')} style={styles.stationIcon} />
          </Marker>
        ))}
      </MapView>

      <View style={styles.overlay}>
        <Text style={styles.greeting}>👋 Olá, João Silva</Text>
        <Text style={styles.question}>Escolha uma estação para reservar sua bicicleta:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Digite o nome da estação ou localização"
            style={styles.input}
            onFocus={handleInputFocus} // Chamando a função ao focar no campo
          />
         
        </View>
      </View>

      {/* Modal de Reserva */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Estação {selectedStation?.id}</Text>
            <Text style={styles.modalText}>Bicicletas disponíveis: {selectedStation?.availableBikes}</Text>
            <TouchableOpacity style={styles.reserveButton} onPress={handleReservation}>
              <Text style={styles.reserveButtonText}>Reservar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalCloseText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;