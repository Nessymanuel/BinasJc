import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2', // Fundo do aplicativo
  },
  header: {
    height: 60,
    backgroundColor: '#5C6BC0', // Azul médio para o cabeçalho
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  backButton: {
    color: 'white',
    fontSize: 24,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  options: {
    color: 'white',
    fontSize: 24,
  },
  chatArea: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  messageContainerSent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
    justifyContent: 'flex-end',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 5,
  },
  receivedMessage: {
    backgroundColor: '#E3F2FD', // Azul claro para mensagens recebidas
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    borderTopLeftRadius: 0,
  },
  sentMessage: {
    backgroundColor: '#E0E0E0', // Cinza claro para mensagens enviadas
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    borderTopRightRadius: 0,
  },
  timestamp: {
    fontSize: 10,
    color: '#555',
    textAlign: 'right',
    marginTop: 5,
  },
  inputArea: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#f0f0f0',
  },
  sendPointsButton: {
    marginLeft: 10,
    backgroundColor: '#5C6BC0', // Azul médio para o botão de pontos
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendPointsText: {
    fontSize: 16,
    color: '#fff',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#5C6BC0', // Azul médio para o botão de envio
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonText: {
    fontSize: 20,
    color: 'white',
  },
});
