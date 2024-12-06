import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Alert, Modal } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';

type ChatMessageProps = {
  navigation: StackNavigationProp<any>;
};

type Mensagem = {
  id: number;
  remetenteId: number;
  destinatarioId: number;
  conteudo: string;
  dataEnvio: string;
};

const ChatMessage: React.FC<ChatMessageProps> = ({ navigation }) => {
  const [mensagens, setMensagens] = useState<Mensagem[]>([]);
  const [conteudo, setConteudo] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [pontosDisponiveis, setPontosDisponiveis] = useState<number>(0); // Inicializa com 0 para testes
  const [pontosParaEnviar, setPontosParaEnviar] = useState('');

  const userId = 1; // ID fixo do usuário logado para teste
  const destinatarioId = 2; // ID fixo do destinatário

  // Função para carregar mensagens do backend
  const carregarMensagens = async () => {
    try {
      const response = await fetch(`http://192.168.43.118:5112/api/mensagem/usuario/${userId}`);
      const data = await response.json();
      
      if (Array.isArray(data)) {
        setMensagens(data);
      } else {
        console.error("Dados recebidos não são um array:", data);
        setMensagens([]);
      }
    } catch (error) {
      console.error("Erro ao carregar mensagens:", error);
      Alert.alert("Erro", "Não foi possível carregar as mensagens.");
      setMensagens([]);
    }
  };

  // Função para carregar dados do usuário, incluindo pontos disponíveis
  const carregarDadosUsuario = async () => {
    try {
      const response = await fetch(`http://192.168.43.118:5112/api/User/${userId}`);
      const data = await response.json();
  
      console.log("Dados do usuário:", data); // Log para verificar a resposta da API
  
      // Verifica se a resposta possui a propriedade "pontuacaoTotal"
      if (data && data.pontuacaoTotal !== undefined) {
        setPontosDisponiveis(data.pontuacaoTotal);
      } else {
        console.warn("A propriedade 'pontuacaoTotal' não foi encontrada nos dados do usuário.");
        Alert.alert("Erro", "Não foi possível carregar a pontuação disponível.");
      }
    } catch (error) {
      console.error("Erro ao carregar pontuação do usuário:", error);
      Alert.alert("Erro", "Não foi possível carregar a pontuação do usuário.");
    }
  };
  
  // Função para enviar mensagem
  const enviarMensagem = async () => {
    if (conteudo.trim() === '') return;

    try {
      const response = await fetch('http://192.168.43.118:5112/api/mensagem/enviar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          remetenteId: userId,
          destinatarioId: destinatarioId,
          conteudo: conteudo,
        }),
      });

      if (response.ok) {
        setConteudo('');
        carregarMensagens();
      } else {
        Alert.alert("Erro", "Não foi possível enviar a mensagem.");
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      Alert.alert("Erro", "Erro ao enviar mensagem. Verifique sua conexão.");
    }
  };

  const abrirModalPontos = () => {
    setModalVisible(true);
  };

  const enviarPontos = async () => {
    const pontos = parseInt(pontosParaEnviar);
  
    if (isNaN(pontos) || pontos <= 0) {
      Alert.alert("Erro", "Insira um valor válido para os pontos.");
      return;
    }
  
    if (pontos > pontosDisponiveis) {
      Alert.alert("Erro", "Pontos insuficientes.");
      return;
    }
  
    try {
      const response = await fetch('http://192.168.43.118:5112/api/TransferenciaPontos/transferir', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userOrigemId: userId,
          userDestinoId: destinatarioId,
          quantidadePontos: pontos,
        }),
      });
  
      if (response.ok) {
        setPontosDisponiveis(pontosDisponiveis - pontos); // Atualiza pontos disponíveis
        setPontosParaEnviar('');
        setModalVisible(false);
        Alert.alert("Sucesso", "Pontos enviados com sucesso!");
      } else {
        Alert.alert("Erro", "Não foi possível enviar os pontos.");
      }
    } catch (error) {
      console.error("Erro ao enviar pontos:", error);
      Alert.alert("Erro", "Erro ao enviar pontos. Verifique sua conexão.");
    }
  };
  

  useEffect(() => {
    carregarMensagens();
    carregarDadosUsuario(); // Carrega os pontos disponíveis ao iniciar
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Ana Gourgel</Text>
        <TouchableOpacity>
          <Text style={styles.options}>⋮</Text>
        </TouchableOpacity>
      </View>

      {/* Chat Messages */}
      <ScrollView style={styles.chatArea}>
        {mensagens.map((mensagem) => (
          <View
            key={mensagem.id}
            style={
              mensagem.remetenteId === userId ? styles.messageContainerSent : styles.messageContainer
            }
          >
            {mensagem.remetenteId !== userId && (
              <Image source={require('./ana.png')} style={styles.avatar} />
            )}
            <View style={mensagem.remetenteId === userId ? styles.sentMessage : styles.receivedMessage}>
              <Text>{mensagem.conteudo}</Text>
              <Text style={styles.timestamp}>{new Date(mensagem.dataEnvio).toLocaleTimeString()}</Text>
            </View>
            {mensagem.remetenteId === userId && (
              <Image source={require('./joao.png')} style={styles.avatar} />
            )}
          </View>
        ))}
      </ScrollView>

      {/* Message Input */}
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma mensagem..."
          placeholderTextColor="#888"
          value={conteudo}
          onChangeText={setConteudo}
        />
        <TouchableOpacity style={styles.sendPointsButton} onPress={abrirModalPontos}>
          <Text style={styles.sendPointsText}>💎</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton} onPress={enviarMensagem}>
          <Text style={styles.sendButtonText}>➤</Text>
        </TouchableOpacity>
      </View>

      {/* Modal para enviar pontos */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Enviar Pontos</Text>
            <Text>Pontos disponíveis: {pontosDisponiveis}</Text>
            <TextInput
              style={styles.inputPoints}
              placeholder="Digite a quantidade de pontos"
              keyboardType="numeric"
              value={pontosParaEnviar}
              onChangeText={setPontosParaEnviar}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelButton}>
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={enviarPontos} style={styles.confirmButton}>
                <Text style={styles.confirmButtonText}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ChatMessage;
