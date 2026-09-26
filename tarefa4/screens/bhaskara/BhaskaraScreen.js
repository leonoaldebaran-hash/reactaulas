import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import TextInputBox from '../../components/textInputBox/TextInputBox';
import CustomButton from '../../components/customButtom/CustomButtom';
import MathUtils from '../../utils/MathUtils';

function BhaskaraScreen() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [delta, setDelta] = useState('');
  const [resultado, setResultado] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bhaskara</Text>
      <Text style={styles.formula}>ax² + bx + c = 0</Text>

      <TextInputBox
        value={a}
        onChangeText={setA}
        placeholder="Digite o valor de a"
        keyboardType="numeric"
      />

      <TextInputBox
        value={b}
        onChangeText={setB}
        placeholder="Digite o valor de b"
        keyboardType="numeric"
      />

      <TextInputBox
        value={c}
        onChangeText={setC}
        placeholder="Digite o valor de c"
        keyboardType="numeric"
      />

      <CustomButton
        title="Calcular"
        onPress={() =>
          MathUtils.calculaBhaskara(a, b, c, setDelta, setResultado)
        }
        style={styles.button}
      />

      <Text style={styles.mensagem}>
        {delta !== '' ? `Δ (delta) = ${delta}` : 'Insira os valores de a, b e c'}
      </Text>
      <Text style={styles.mensagem}>{resultado ? resultado : ''}</Text>
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
    marginBottom: 10,
  },
  formula: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    width: '80%',
  },
  mensagem: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default BhaskaraScreen;
