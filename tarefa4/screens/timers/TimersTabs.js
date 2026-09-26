import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CronometroScreen from '../cronometro/CronometroScreen';
import PomodoroScreen from '../pomodoro/PomodoroScreen';

const Tab = createBottomTabNavigator();

function TimersTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Cronômetro"
        component={CronometroScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="stopwatch" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pomodoro"
        component={PomodoroScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="timer" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TimersTabs;
