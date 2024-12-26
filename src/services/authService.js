import api from './api';

// Função para registrar um novo usuário
export const register = async (usuario) => {
  try {
    const response = await api.post('/Auth/Register', usuario);
    return response.data;
  } catch (error) {
    console.error('Erro ao registrar usuário:', error.response?.data || error.message);
    throw error;
  }
};

// Função para fazer login de usuário
export const login = async (credenciais) => {

  try {
    Alert.alert('entrou no try!')
    const response = await api.post('/Auth/Login', credenciais);
    return response.data; // Retorna o token JWT
  } catch (error) {
    Alert.alert('entrou no try 1!')
    console.error('Erro ao fazer login:', error.response?.data || error.message);
    throw error;
  }
};
