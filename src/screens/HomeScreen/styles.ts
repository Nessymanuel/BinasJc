// src/screens/HomeScreen/styles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF69B4',
  },
  score: {
    fontSize: 18,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20,
    marginTop: 20,
  },
  bikeItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  messageButton: {
    color: '#FF69B4',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default styles;
