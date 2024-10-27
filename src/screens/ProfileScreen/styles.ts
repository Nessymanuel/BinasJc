import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff', // Fundo branco
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FF69B4', // Cor rosa para o cabeçalho
  },
  infoContainer: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Cor do texto
  },
  value: {
    fontSize: 16,
    color: '#555', // Cor do valor
  },
  editButton: {
    backgroundColor: '#FF69B4', // Cor rosa para o botão
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#ffffff', // Texto do botão em branco
    fontWeight: 'bold',
  },
});

export default styles;
