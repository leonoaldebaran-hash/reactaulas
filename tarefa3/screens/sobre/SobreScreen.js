import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import Logo from '../../components/logo/Logo';

function SobreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo />
      <Text style={styles.title}>Sobre</Text>
      <Text style={styles.texto}>
        Aplicativo desenvolvido em React Native para a disciplina de
        Programação Mobile.
      </Text>
      <Text style={styles.texto}>
        Utiliza menu Drawer, Tab Navigator e a classe MathUtils para os
        cálculos.
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

export default SobreScreen;
