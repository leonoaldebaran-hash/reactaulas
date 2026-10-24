import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Apis from '../../apis/Apis';
import Styles from './Style';

function UsuariosScreen() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    Apis.listarUsuarios(setUsuarios);
  }, []);

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Cadastro de Usuários</Text>
      <Text style={Styles.mensagem}>Total de usuários: {usuarios.length}</Text>
    </View>
  );
}

export default UsuariosScreen;
