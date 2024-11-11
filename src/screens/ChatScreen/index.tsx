import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import { StackNavigationProp } from '@react-navigation/stack';

type ChatScreenProps = {
  navigation: StackNavigationProp<any>;
};

interface Chat {
  id: string;
  name: string;
  message: string;
  time: string;
  avatar: any;
  isOnline: boolean;
  unreadCount: number;
}

const chats: Chat[] = [
  { id: '1', name: 'Ana Gourgel', message: 'Oi, você completou a rota hoje? Ganhei 20 pontos!', time: '12:45', avatar: require('./ana.png'), isOnline: true, unreadCount: 2 },
  { id: '2', name: 'Gracieth Manuel', message: 'Envia só pontos, eh', time: '13:30', avatar: require('./Nessy.png'), isOnline: false, unreadCount: 0 },
  { id: '3', name: 'Rafael Pires', message: 'E aí, já usou o GPS para calcular a sua distância? Eu consegui 15 km ontem.', time: '14:00', avatar: require('./Rafael.jpg'), isOnline: true, unreadCount: 5 },
  { id: '4', name: 'Dora Namboto', message: 'Oi! O que você achou da última atualização? Eu gostei da melhoria no mapa!', time: '16:10', avatar: require('./Dora.png'), isOnline: false, unreadCount: 0 },
];

const ChatScreen: React.FC<ChatScreenProps> = ({ navigation }) => {
  const renderChatItem = ({ item }: { item: Chat }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => {
        if (item.name === 'Ana Gourgel') {
          navigation.navigate('Message');
        }
      }}
    >
      <View style={styles.avatarContainer}>
        <Image source={item.avatar} style={styles.avatar} />
        {item.isOnline && <View style={styles.onlineIndicator} />}
      </View>
      <View style={styles.chatDetails}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.lastMessage}>{item.message}</Text>
      </View>
      <View style={styles.chatMeta}>
        <Text style={styles.time}>{item.time}</Text>
        {item.unreadCount > 0 && (
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadText}>{item.unreadCount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Chat</Text>
      </View>
      <FlatList
        data={chats}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ChatScreen;
