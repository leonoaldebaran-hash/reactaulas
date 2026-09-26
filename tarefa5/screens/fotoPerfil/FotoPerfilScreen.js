import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function FotoPerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha Foto</Text>
      <Image style={styles.foto} source={require('../../assets/logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 100, // deixa a foto redonda
    borderWidth: 3,
    borderColor: '#1e90ff',
  },
});

export default FotoPerfilScreen;
