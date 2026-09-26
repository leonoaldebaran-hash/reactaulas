import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import TextInputBox from '../../components/textInputBox/TextInputBox';
import CustomButton from '../../components/customButtom/CustomButtom';
import ConversaoUtils from '../../utils/ConversaoUtils';

// Textos de cada tipo de conversão.
const CONVERSOES = {
  FtoC: { titulo: 'Fahrenheit → Celsius', placeholder: 'Digite a temperatura em °F' },
  CtoF: { titulo: 'Celsius → Fahrenheit', placeholder: 'Digite a temperatura em °C' },
  CtoK: { titulo: 'Celsius → Kelvin', placeholder: 'Digite a temperatura em °C' },
};

function ConversaoScreen({ route }) {
  const tipo = route.params.tipo;
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{CONVERSOES[tipo].titulo}</Text>

      <TextInputBox
        value={valor}
        onChangeText={setValor}
        placeholder={CONVERSOES[tipo].placeholder}
        keyboardType="numeric"
      />

      <CustomButton
        title="Converter"
        onPress={() => ConversaoUtils.converter(valor, tipo, setResultado)}
        style={styles.button}
      />

      <Text style={styles.resultado}>
        {resultado ? resultado : 'O resultado aparecerá aqui'}
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
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    width: '80%',
  },
  resultado: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25,
    color: '#333',
  },
});

export default ConversaoScreen;
