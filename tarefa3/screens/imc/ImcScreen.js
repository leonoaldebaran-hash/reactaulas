import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import TextInputBox from '../../components/textInputBox/TextInputBox';
import CustomButton from '../../components/customButtom/CustomButtom';
import MathUtils from '../../utils/MathUtils';

function ImcScreen() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState('');
  const [mensagem, setMensagem] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>IMC</Text>

      <TextInputBox
        value={altura}
        onChangeText={setAltura}
        placeholder="Digite sua altura em cm"
        keyboardType="numeric"
      />

      <TextInputBox
        value={peso}
        onChangeText={setPeso}
        placeholder="Digite o peso em kg"
        keyboardType="numeric"
      />

      <CustomButton
        title="Calcular"
        onPress={() => MathUtils.calculaIMC(peso, altura, setImc, setMensagem)}
        style={styles.button}
      />

      <Text style={styles.mensagem}>
        {imc ? `Seu IMC é: ${imc}` : 'Insira seus dados para calcular o IMC'}
      </Text>
      <Text style={styles.mensagem}>{mensagem ? mensagem : ''}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    width: '80%',
  },
  mensagem: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default ImcScreen;
