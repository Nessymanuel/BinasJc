import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff', // Fundo branco
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF69B4', // Cor rosa para o cabeçalho
  },
  messageList: {
    flex: 1,
    marginBottom: 10,
  },
  messageContainer: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 8,
    backgroundColor: 'gray', // cinza
  },
  messageText: {
    color: '#ffffff', // Texto branco
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#FF69B4', // Cor rosa para o botão
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  sendButtonText: {
    color: '#ffffff', // Texto do botão em branco
    fontWeight: 'bold',
  },
});

export default styles;
