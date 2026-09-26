import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/home/HomeScreen';
import SobreScreen from './screens/sobre/SobreScreen';
import CalculosTabs from './screens/calculos/CalculosTabs';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Sobre" component={SobreScreen} />
        <Drawer.Screen name="Cálculos" component={CalculosTabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
