// styles.ts ou styles.js
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
  stationItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  stationName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  stationLocation: {
    fontSize: 14,
    color: '#555',
  },
  stationBikes: { // Adicionando estilo stationBikes
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  mapButton: {
    backgroundColor: '#007BFF',
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
    alignItems: 'center',
  },
  mapButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});
