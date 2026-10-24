import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CadastroScreen from '../cadastro/CadastroScreen';
import ListaScreen from '../lista/ListaScreen';

const Tab = createBottomTabNavigator();

function UsuariosTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Cadastro"
        component={CadastroScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-add" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Usuários"
        component={ListaScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default UsuariosTabs;