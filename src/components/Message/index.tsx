import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles'; // Importação correta para exportação 'default'

type ChatMessageProps = {
  navigation: StackNavigationProp<any>;
};

const ChatMessage: React.FC<ChatMessageProps> = ({ navigation }) => {
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
        {/* Example messages */}
        <View style={styles.messageContainer}>
          <Image source={require('./ana.png')} style={styles.avatar} />
          <View style={styles.receivedMessage}>
            <Text>Oi! Já testaste a funcionalidade de rastreamento com GPS no BinasJC?</Text>
            <Text style={styles.timestamp}>10:30</Text>
          </View>
        </View>

        <View style={styles.messageContainerSent}>
          <View style={styles.sentMessage}>
            <Text>Sim, testei ontem. Funciona bem, mas ainda preciso otimizar a detecção de beacons BLE.</Text>
            <Text style={styles.timestamp}>10:32</Text>
          </View>
          <Image source={require('./joao.png')} style={styles.avatar} />
        </View>

        <View style={styles.messageContainer}>
          <Image source={require('./ana.png')} style={styles.avatar} />
          <View style={styles.receivedMessage}>
            <Text>Boa! Não esquece de implementar a troca de pontos entre ciclistas usando o WiFi Direct.</Text>
            <Text style={styles.timestamp}>10:35</Text>
          </View>
        </View>

        <View style={styles.messageContainerSent}>
          <View style={styles.sentMessage}>
            <Text>Claro! Vou trabalhar nisso hoje à tarde. E a reserva de bicicletas, já implementaste?</Text>
            <Text style={styles.timestamp}>10:38</Text>
          </View>
          <Image source={require('./joao.png')} style={styles.avatar} />
        </View>

        <View style={styles.messageContainer}>
          <Image source={require('./ana.png')} style={styles.avatar} />
          <View style={styles.receivedMessage}>
            <Text>Ainda não, mas está na minha lista. Precisamos garantir que o servidor atualize a disponibilidade em tempo real.</Text>
            <Text style={styles.timestamp}>10:40</Text>
          </View>
        </View>
      </ScrollView>

      {/* Message Input */}
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma mensagem..."
          placeholderTextColor="#888"
        />
        <TouchableOpacity style={styles.sendPointsButton}>
          <Text style={styles.sendPointsText}>💎</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatMessage;
