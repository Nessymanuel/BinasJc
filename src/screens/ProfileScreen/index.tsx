import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';

// Definindo o tipo de navegação
type RootStackParamList = {
  ProfileScreen: undefined;
  EditarP: undefined; 
  Historico: undefined;
  Termos: undefined;
  Login:undefined;
};

// Tipagem de navegação para a tela atual
type NavigationProps = StackNavigationProp<RootStackParamList, 'ProfileScreen'>;

export default function ProfileScreen() {
  const navigation = useNavigation<NavigationProps>();

  const handleLogout = () => {
    console.log('Usuário deslogado');
    // Lógica para deslogar o usuário
    navigation.navigate('Login');
  };

  const handleEditProfile = () => {
    navigation.navigate('EditarP'); // Navega para a tela "EditarP"
  };

  const handleRideHistory = () => {
    navigation.navigate('Historico'); // Navega para a tela "EditarP"
  };

  const handleTermsAndConditions = () => {
    navigation.navigate('Termos'); // Navega para a tela "EditarP"
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={require('./ProfJoao.png')}
          style={styles.profileImage}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>João Costa</Text>
          <Text style={styles.profileEmail}>joao.costa@mail.com</Text>
        </View>
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <MaterialIcons name="edit" size={24} color="#4682B4" />
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Image
            source={require('./bike.png')} 
            style={styles.statIcon}
          />
          <Text style={styles.statLabel}>Viagens Feitas</Text>
          <Text style={styles.statText}>40 Viagens</Text>
        </View>
        
        <View style={styles.statBox}>
          <FontAwesome name="compass" size={40} color="#4682B4" />
          <Text style={styles.statLabel}>Distância</Text>
          <Text style={styles.statText}>90.45 km</Text>
        </View>
        <View style={styles.statBox}>
          <Image
            source={require('./diamond.png')} 
            style={styles.statIcon}
          />
          <Text style={styles.statLabel}>Pontos</Text>
          <Text style={styles.statText}>50 Ptos</Text>
        </View>
      </View>

      <View style={styles.menuContainer}>
        <MenuItem title="Histórico de viagens" icon="history"onPress={handleRideHistory} />
        <MenuItem title="Indique e ganhe" icon="gift" />
        <MenuItem title="Idioma" icon="language" />
        <MenuItem title="Configurações do app" icon="cogs" />
        <MenuItem title="Perguntas frequentes" icon="question-circle" />
        <MenuItem title="Política de privacidade" icon="shield" />
        <MenuItem title="Termos e condições" icon="file-text" onPress={handleTermsAndConditions} />
        <MenuItem title="Ajuda e suporte" icon="question-circle" />
        <MenuItem title="Sair" icon="sign-out" isLogout onPress={handleLogout} />
      </View>
    </ScrollView>
  );
}

interface MenuItemProps {
  title: string;
  icon: "history" | "gift" | "language" | "cogs" | "question-circle" | "shield" | "file-text" | "sign-out";
  isLogout?: boolean;
  onPress?: () => void;
}

function MenuItem({ title, icon, isLogout, onPress }: MenuItemProps) {
  return (
    <TouchableOpacity style={[styles.menuItem, isLogout && styles.logoutItem]} onPress={onPress}>
      <FontAwesome name={icon} size={24} color={isLogout ? "red" : "#4682B4"} />
      <Text style={[styles.menuText, isLogout && styles.logoutText]}>{title}</Text>
    </TouchableOpacity>
  );
}
