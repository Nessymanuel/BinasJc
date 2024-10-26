// src/components/BottomTabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProfileScreen from '../screens/ProfileScreen';
import CyclistsScreen from '../screens/CyclistsScreen';
import StationsScreen from '../screens/ChatScreen';
import ChatScreen from '../screens/StationsScreen';
import HomeScreen from '../screens/HomeScreen'; 

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Estações" component={StationsScreen} />
      <Tab.Screen name="Ciclistas" component={CyclistsScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
