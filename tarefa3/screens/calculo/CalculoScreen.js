import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import TextInputBox from '../../components/textInputBox/TextInputBox';
import CustomButton from '../../components/customButtom/CustomButtom';
import { Picker } from '@react-native-picker/picker';
import MathUtils from '../../utils/MathUtils';

function CalculoScreen() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [selectedValue, setSelectedValue] = useState('+');
  const [resultado, setResultado] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.title}>Calculadora</Text>

      <TextInputBox
        value={number1}
        onChangeText={setNumber1}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
      />

      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Somar (+)" value="+" />
        <Picker.Item label="Subtrair (-)" value="-" />
        <Picker.Item label="Multiplicar (*)" value="*" />
        <Picker.Item label="Dividir (/)" value="/" />
      </Picker>

      <TextInputBox
        value={number2}
        onChangeText={setNumber2}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
      />

      <CustomButton
        title="Calcular"
        onPress={() =>
          MathUtils.funcaoCalculo(number1, number2, selectedValue, setResultado)
        }
        style={styles.button}
      />

      <Text style={styles.resultado}>
        {resultado ? resultado : 'O resultado aparecerá aqui'}
      </Text>
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
  picker: {
    height: 50,
    width: 200,
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

export default CalculoScreen;
