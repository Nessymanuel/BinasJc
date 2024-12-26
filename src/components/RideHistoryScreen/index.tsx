import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface Ride {
  id: string;
  bikeModel: string;
  date: string;
  distance: string;
  duration: string;
  points: string;
  image: any; // Use require para imagens locais
}

type RootStackParamList = {
  RideHistory: undefined;
  Profile: undefined;
};

type RideHistoryScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'RideHistory'>;

interface Props {
  navigation: RideHistoryScreenNavigationProp;
}

const rides: Ride[] = [
  {
    id: '1',
    bikeModel: 'BinaJC BK2545',
    date: '5 ago 2022, 05:49 pm',
    distance: '3.5 km',
    duration: '10.36 min',
    points: '+5 pts',
    image: require('./bicicleta.png'),
  },
  {
    id: '2',
    bikeModel: 'BinaJC KG5689',
    date: '6 ago 2022, 04:49 pm',
    distance: '3.5 km',
    duration: '10.36 min',
    points: '+10 pts',
    image: require('./bicicleta.png'),
  },
  // Adicione mais itens conforme necessário
];

export default function RideHistoryScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Histórico de Corridas</Text>
      </View>

      <FlatList
        data={rides}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.rideCard}>
            <Image source={item.image} style={styles.bikeImage} />
            <View style={styles.rideInfo}>
              <Text style={styles.bikeModel}>{item.bikeModel}</Text>
              <Text style={styles.rideDate}>{item.date}</Text>
              <View style={styles.rideDetails}>
                <Text style={styles.rideDetailText}>{item.distance}</Text>
                <Text style={styles.rideDetailText}>{item.duration}</Text>
                <Text style={styles.rideDetailText}>{item.points}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
