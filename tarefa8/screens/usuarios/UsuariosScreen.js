import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import TextInputBox from '../../components/textInputBox/TextInputBox';
import Apis from '../../apis/Apis';
import Styles from './Style';

function UsuariosScreen() {
  const [usuarios, setUsuarios] = useState([]);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  useEffect(() => {
    Apis.listarUsuarios(setUsuarios);
  }, []);

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Cadastro de Usuários</Text>

      <TextInputBox
        value={nome}
        onChangeText={setNome}
        placeholder="Nome"
      />

      <TextInputBox
        value={telefone}
        onChangeText={setTelefone}
        placeholder="Telefone"
        keyboardType="phone-pad"
      />

      <TextInputBox
        value={endereco}
        onChangeText={setEndereco}
        placeholder="Endereço"
      />

      <Text style={Styles.digitando}>Nome digitado: {nome}</Text>
      <Text style={Styles.mensagem}>Total de usuários: {usuarios.length}</Text>
    </View>
  );
}

export default UsuariosScreen;
