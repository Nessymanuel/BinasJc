// src/screens/CyclistsScreen/styles.ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc', // Cor mais neutra para o contorno
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  cyclistItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc', // Linha de separação mais suave
  },
  cyclistName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cyclistScore: {
    fontSize: 14,
    color: '#555',
    marginTop: 4, // Pequeno espaçamento para melhor separação entre as linhas
  },
  messageButton: {
    backgroundColor: '#FF69B4', // Cor rosa para o botão
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
    alignItems: 'center',
  },
  messageButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});
