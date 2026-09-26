import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import DadosPerfilScreen from '../dadosPerfil/DadosPerfilScreen';
import FotoPerfilScreen from '../fotoPerfil/FotoPerfilScreen';

const Tab = createBottomTabNavigator();

function PerfilTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Dados"
        component={DadosPerfilScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Foto"
        component={FotoPerfilScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="image" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default PerfilTabs;
