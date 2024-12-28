import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';
import { BASE_URL } from '../../../config';

type LoginScreenProps = {
  navigation: StackNavigationProp<any>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch(`${BASE_URL}/Auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          senha: password,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
  
        // Armazene o ID do usuário no AsyncStorage
        await AsyncStorage.setItem('userId', data.id.toString());
  
        Alert.alert('Login bem-sucedido!', `Bem-vindo(a), ${data.nome}`);
        navigation.navigate('Main'); // Navega para a tela principal
      } else {
        Alert.alert('Erro de login', 'Credenciais inválidas. Tente novamente.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login. Verifique sua conexão e tente novamente.');
      console.error('Erro de login:', error);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo(a)</Text>
      <Text style={styles.subtitle}>Faça login para continuar</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        placeholderTextColor="#A9A9A9"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        placeholderTextColor="#A9A9A9"
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Não tem uma conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.footerLink}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
