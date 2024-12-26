// src/screens/CyclistsScreen/styles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#FF69B4'
  },
  searchInput: {
    height: 40,
    borderColor: '#a1a1aa', // Cor rosa para o contorno
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    marginTop:20,
  },
  cyclistItem: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    marginBottom: 10,
    borderRadius: 5,
  },
  cyclistName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cyclistScore: {
    fontSize: 14,
    color: '#555',
  },
  messageButton: {
    marginTop: 10,
    backgroundColor: '#FF69B4', // Cor rosa para o botão
    padding: 10,
    borderRadius: 5,
  },
  messageButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default styles;
