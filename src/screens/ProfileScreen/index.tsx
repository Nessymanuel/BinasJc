// src/screens/ProfileScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Perfil do Usuário</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.value}>João Costa</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Pontuação:</Text>
        <Text style={styles.value}>150 pontos</Text>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Editar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}
