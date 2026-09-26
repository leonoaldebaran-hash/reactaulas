import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import TextInputBox from '../../components/textInputBox/TextInputBox';
import CustomButton from '../../components/customButtom/CustomButtom';

function DadosPerfilScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [idade, setIdade] = useState('');

  function salvar() {
    if (!nome || !email || !telefone || !idade) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    alert(
      `Dados salvos!\nNome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nIdade: ${idade}`
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Meus Dados</Text>

      <TextInputBox value={nome} onChangeText={setNome} placeholder="Nome" />

      <TextInputBox
        value={email}
        onChangeText={setEmail}
        placeholder="E-mail"
        keyboardType="email-address"
      />

      <TextInputBox
        value={telefone}
        onChangeText={setTelefone}
        placeholder="Telefone"
        keyboardType="phone-pad"
      />

      <TextInputBox
        value={idade}
        onChangeText={setIdade}
        placeholder="Idade"
        keyboardType="numeric"
      />

      <CustomButton title="Salvar" onPress={salvar} style={styles.button} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    width: '80%',
  },
});

export default DadosPerfilScreen;
