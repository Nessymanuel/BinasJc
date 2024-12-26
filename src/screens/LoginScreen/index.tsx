// LoginScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';
import { login } from '../../services/authService';

type LoginScreenProps = {
  navigation: StackNavigationProp<any>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      console.log('Testando o endpoint')
      const data = await login({ email, senhaHash: password });
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      navigation.navigate('Main', { userId: data.userId });
    } catch (error :any  ) {
     // Alert.alert('Erro', error.response?.data?.message || 'Erro ao realizar login.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo(a)</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
