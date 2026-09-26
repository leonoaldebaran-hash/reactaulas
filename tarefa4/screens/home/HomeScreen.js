import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import Logo from '../../components/logo/Logo';

function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo />
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.texto}>
        Use o menu no canto superior esquerdo para navegar.
      </Text>
      <Text style={styles.texto}>
        Na guia Cálculos você encontra a Calculadora, o IMC e a equação de
        segundo grau (Bhaskara).
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  texto: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
});

export default HomeScreen;
