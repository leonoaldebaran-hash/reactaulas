import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, StatusBar } from 'react-native';
import TextInputBox from '../../components/textInputBox/TextInputBox';
import CustomButton from '../../components/customButtom/CustomButtom';
import Logo from '../../components/logo/Logo';
import MathUtils from '../../utils/MathUtils';

function MediaScreen() {
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [media, setMedia] = useState('');
  const [situacao, setSituacao] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Logo />

      <Text style={styles.title}>Média do Aluno</Text>

      <TextInputBox
        value={nota1}
        onChangeText={setNota1}
        placeholder="Digite a 1ª nota"
        keyboardType="numeric"
      />

      <TextInputBox
        value={nota2}
        onChangeText={setNota2}
        placeholder="Digite a 2ª nota"
        keyboardType="numeric"
      />

      <TextInputBox
        value={nota3}
        onChangeText={setNota3}
        placeholder="Digite a 3ª nota"
        keyboardType="numeric"
      />

      <CustomButton
        title="Calcular Média"
        onPress={() =>
          MathUtils.calculaMedia(nota1, nota2, nota3, setMedia, setSituacao)
        }
        style={styles.button}
      />

      <Text style={styles.media}>
        {media ? `Média: ${media}` : 'Digite as notas para calcular a média'}
      </Text>

      {situacao ? (
        <Text
          style={[
            styles.situacao,
            situacao === 'Aprovado' ? styles.aprovado : styles.reprovado,
          ]}
        >
          {situacao}
        </Text>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    width: '80%',
  },
  media: {
    fontSize: 20,
    marginTop: 25,
    color: '#333',
  },
  situacao: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  aprovado: {
    color: '#2e7d32',
  },
  reprovado: {
    color: '#c62828',
  },
});

export default MediaScreen;
