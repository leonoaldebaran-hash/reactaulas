import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CalculoScreen from '../calculo/CalculoScreen';
import ImcScreen from '../imc/ImcScreen';
import BhaskaraScreen from '../bhaskara/BhaskaraScreen';

const Tab = createBottomTabNavigator();

// Tab Navigator que fica dentro da guia "Cálculos" do Drawer.
// headerShown: false para não aparecer um cabeçalho duplicado
// (o Drawer já mostra o cabeçalho com o botão do menu).
function CalculosTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Calculadora"
        component={CalculoScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calculator" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="IMC"
        component={ImcScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="body" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Bhaskara"
        component={BhaskaraScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="stats-chart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default CalculosTabs;
