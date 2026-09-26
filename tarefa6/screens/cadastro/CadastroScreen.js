import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import TextInputBox from '../../components/textInputBox/TextInputBox';
import CustomButton from '../../components/customButtom/CustomButtom';
import { useAtividades } from '../../context/AtividadesContext';

function CadastroScreen() {
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [atividade, setAtividade] = useState('');
  const { adicionarAtividade } = useAtividades();

  function salvar() {
    if (!data || !hora || !atividade) {
      alert('Por favor, preencha data, hora e atividade.');
      return;
    }

    alert(`Atividade salva!\nData: ${data}\nHora: ${hora}\nAtividade: ${atividade}`);

    // DESAFIO: adiciona na lista compartilhada, assim aparece na Agenda.
    adicionarAtividade(data, hora, atividade);

    setData('');
    setHora('');
    setAtividade('');
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Atividade</Text>

      <TextInputBox
        value={data}
        onChangeText={setData}
        placeholder="Data (DD/MM/AAAA)"
        keyboardType="numeric"
      />

      <TextInputBox
        value={hora}
        onChangeText={setHora}
        placeholder="Hora (HH:MM)"
        keyboardType="numeric"
      />

      <TextInputBox
        value={atividade}
        onChangeText={setAtividade}
        placeholder="Atividade"
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

export default CadastroScreen;
