import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F7FAFC', // Fundo mais claro e suave
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 5,
    color: '#333',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    marginBottom: 15,
    padding: 12,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#FFF',
  },
  buttonContainer: {
    marginTop: 15,
  },
  button: {
    backgroundColor: '#FF69B4',
    paddingVertical: 12,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#666',
  },
  footerLink: {
    color: '#FF69B4',
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 16,
  },
});

export default styles;
