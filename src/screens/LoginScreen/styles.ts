import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 4,
    backgroundColor: '#F0F8FF', // Cor de fundo
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    padding: 8,
    width: '100%',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
  },
  footerLink: {
    color: '#FF69B4', // Cor do link
    fontWeight: 'bold',
  },
});

export default styles;
