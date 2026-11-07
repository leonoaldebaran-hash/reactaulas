import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import TextInputBox from '../../components/textInputBox/TextInputBox';
import CustomButtom from '../../components/customButtom/CustomButtom';
import {
  createTable,
  getAgenda,
  adicionarAgenda,
  removerAgenda,
  editarAgenda,
} from '../../repository/AgendaRepository';
import Styles from './Style';

function AgendaScreen() {
  const [novoNome, setNovoNome] = useState('');
  const [novoTelefone, setNovoTelefone] = useState('');
  const [agenda, setAgenda] = useState([]);
  const [idEditando, setIdEditando] = useState(null);

  useEffect(() => {
    const iniciar = async () => {
      await createTable();
      await getAgenda(setAgenda);
    };
    iniciar();
  }, []);

  const limparCampos = () => {
    setNovoNome('');
    setNovoTelefone('');
    setIdEditando(null);
  };

  const salvar = async () => {
    if (novoNome.trim() === '' || novoTelefone.trim() === '') {
      alert('Preencha o nome e o telefone!');
      return;
    }
    if (idEditando !== null) {
      await editarAgenda(idEditando, novoNome, novoTelefone, setAgenda);
      alert('Contato alterado!');
    } else {
      await adicionarAgenda(novoNome, novoTelefone, setAgenda);
    }
    limparCampos();
  };

  const iniciarEdicao = (item) => {
    setIdEditando(item.id);
    setNovoNome(item.nome);
    setNovoTelefone(item.telefone);
  };

  const remover = async (id) => {
    if (id === idEditando) {
      limparCampos();
    }
    await removerAgenda(id, setAgenda);
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.titulo}>
        {idEditando !== null ? 'Editar contato' : 'Agenda'}
      </Text>

      <TextInputBox
        value={novoNome}
        onChangeText={setNovoNome}
        placeholder="Digite o nome"
        style={Styles.input}
      />
      <TextInputBox
        value={novoTelefone}
        onChangeText={setNovoTelefone}
        placeholder="Digite o telefone"
        keyboardType="phone-pad"
        style={Styles.input}
      />

      <CustomButtom
        title={idEditando !== null ? 'Salvar alteração' : 'Adicionar'}
        onPress={salvar}
        style={Styles.botaoSalvar}
      />
      {idEditando !== null && (
        <CustomButtom
          title="Cancelar"
          onPress={limparCampos}
          style={Styles.botaoCancelar}
        />
      )}

      <Text style={Styles.subtitulo}>LISTA:</Text>
      <FlatList
        data={agenda}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <Text style={Styles.listaVazia}>Nenhum contato cadastrado.</Text>
        }
        renderItem={({ item }) => (
          <View
            style={[Styles.item, item.id === idEditando && Styles.itemEditando]}
          >
            <View style={Styles.itemInfo}>
              <Text style={Styles.itemNome}>{item.nome}</Text>
              <Text style={Styles.itemTelefone}>{item.telefone}</Text>
            </View>
            <CustomButtom
              title="Editar"
              onPress={() => iniciarEdicao(item)}
              style={[Styles.botaoPequeno, Styles.botaoEditar]}
            />
            <CustomButtom
              title="Remover"
              onPress={() => remover(item.id)}
              style={[Styles.botaoPequeno, Styles.botaoRemover]}
            />
          </View>
        )}
      />
    </View>
  );
}

export default AgendaScreen;