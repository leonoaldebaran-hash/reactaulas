import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ConversaoScreen from '../conversao/ConversaoScreen';

const Tab = createBottomTabNavigator();

// As 3 abas usam a mesma tela (ConversaoScreen).
// O "initialParams" diz para a tela qual conversão ela deve fazer.
function ConversoesTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="°F → °C"
        component={ConversaoScreen}
        initialParams={{ tipo: 'FtoC' }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="thermometer" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="°C → °F"
        component={ConversaoScreen}
        initialParams={{ tipo: 'CtoF' }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="swap-horizontal" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="°C → K"
        component={ConversaoScreen}
        initialParams={{ tipo: 'CtoK' }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flask" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default ConversoesTabs;
