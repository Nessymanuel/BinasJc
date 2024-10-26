import React from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';

type LoginScreenProps = {
  navigation: StackNavigationProp<any>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const handleLogin = () => {
    // Lógica de login
    console.log('Usuário logado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      <View style={styles.buttonContainer}>
        <Button title="Entrar" onPress={handleLogin} color="#FF69B4" />
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

