// src/components/BottomTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ProfileScreen from '../screens/ProfileScreen';
import CyclistsScreen from '../screens/CyclistsScreen';
import StationsScreen from '../screens/StationsScreen';
import ChatScreen from '../screens/ChatScreen';
import HomeScreen from '../screens/HomeScreen'; 

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FF69B4',  // Cor rosa para a aba ativa
        tabBarInactiveTintColor: 'gray',    // Cor cinza para abas inativas
      }}
    >
      <Tab.Screen 
        name="Home"  
        component={HomeScreen} 
        options={{  
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          headerShown: false, // Ocultar o cabeçalho
        }}  
      />
      <Tab.Screen 
        name="Chat" 
        component={ChatScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles" size={size} color={color} />
          ),
          headerShown: false, 
        }} 
      />
      <Tab.Screen 
        name="Estações" 
        component={StationsScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bicycle" size={size} color={color} />
          ),
          headerShown: false, 
        }} 
      />
      <Tab.Screen 
        name="Ciclistas" 
        component={CyclistsScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          ),
          headerShown: false, 
        }} 
      />
      <Tab.Screen 
        name="Perfil" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
          headerShown: false, 
        }} 
      />
    </Tab.Navigator>
  );
}
