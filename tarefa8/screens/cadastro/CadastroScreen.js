import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import TextInputBox from '../../components/textInputBox/TextInputBox';
import CustomButton from '../../components/customButtom/CustomButtom';
import Apis from '../../apis/Apis';
import Styles from './Style';

function CadastroScreen({ route, navigation }) {
  const [usuarioId, setUsuarioId] = useState(null);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  useEffect(() => {
    const usuario = route.params?.usuario;

    if (usuario) {
      setUsuarioId(usuario._id);
      setNome(usuario.nome);
      setTelefone(usuario.telefone);
      setEndereco(usuario.endereco);
    }
  }, [route.params]);

  function cancelarEdicao() {
    setUsuarioId(null);
    setNome('');
    setTelefone('');
    setEndereco('');
  }

  async function salvar() {
    if (!nome || !telefone || !endereco) {
      alert('Preencha nome, telefone e endereço.');
      return;
    }

    const usuario = { nome, telefone, endereco };

    if (usuarioId) {
      const atualizou = await Apis.atualizarUsuario(usuarioId, usuario);

      if (atualizou) {
        alert('Usuário atualizado com sucesso!');
        cancelarEdicao();
        navigation.navigate('Usuários');
      }
      return;
    }

    const criou = await Apis.criarUsuario(usuario);

    if (criou) {
      alert('Usuário cadastrado com sucesso!');
      cancelarEdicao();
    }
  }

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>
        {usuarioId ? 'Editar usuário' : 'Novo usuário'}
      </Text>

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

      <CustomButton
        title={usuarioId ? 'Salvar alterações' : 'Cadastrar'}
        onPress={salvar}
        style={Styles.button}
      />

      {usuarioId ? (
        <CustomButton
          title="Cancelar edição"
          onPress={cancelarEdicao}
          style={Styles.botaoCancelar}
        />
      ) : null}
    </View>
  );
}

export default CadastroScreen;