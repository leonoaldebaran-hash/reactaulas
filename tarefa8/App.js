import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UsuariosTabs from './screens/usuarios/UsuariosTabs';

export default function App() {
  return (
    <NavigationContainer>
      <UsuariosTabs />
    </NavigationContainer>
  );
}