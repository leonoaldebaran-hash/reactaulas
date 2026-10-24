import React, { useState, useCallback } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import CustomButton from '../../components/customButtom/CustomButtom';
import Apis from '../../apis/Apis';
import Styles from './Style';

function ListaScreen({ navigation }) {
  const [usuarios, setUsuarios] = useState([]);

  useFocusEffect(
    useCallback(() => {
      Apis.listarUsuarios(setUsuarios);
    }, [])
  );

  async function excluir(id) {
    const excluiu = await Apis.excluirUsuario(id);

    if (excluiu) {
      alert('Usuário excluído com sucesso!');
      Apis.listarUsuarios(setUsuarios);
    }
  }

  return (
    <View style={Styles.container}>
      <Text style={Styles.mensagem}>Total de usuários: {usuarios.length}</Text>

      <FlatList
        data={usuarios}
        keyExtractor={(item) => item._id}
        ListEmptyComponent={
          <Text style={Styles.vazio}>Nenhum usuário cadastrado.</Text>
        }
        renderItem={({ item }) => (
          <View style={Styles.card}>
            <Text style={Styles.cardNome}>{item.nome}</Text>
            <Text style={Styles.cardTexto}>Telefone: {item.telefone}</Text>
            <Text style={Styles.cardTexto}>Endereço: {item.endereco}</Text>

            <View style={Styles.botoes}>
              <CustomButton
                title="Editar"
                onPress={() => navigation.navigate('Cadastro', { usuario: item })}
                style={Styles.botaoEditar}
              />
              <CustomButton
                title="Excluir"
                onPress={() => excluir(item._id)}
                style={Styles.botaoExcluir}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}

export default ListaScreen;