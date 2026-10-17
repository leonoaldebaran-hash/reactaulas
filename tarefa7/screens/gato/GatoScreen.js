import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import CustomButton from '../../components/customButtom/CustomButtom';
import Apis from '../../apis/Apis';
import Styles from './Style';

function GatoScreen() {
  const [urlGato, setUrlGato] = useState(null);

  useEffect(() => {
    Apis.buscaGato(setUrlGato);
  }, []);

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Gato Aleatório</Text>

      {urlGato ? (
        <Image
          source={{ uri: urlGato }}
          style={Styles.imagem}
          resizeMode="contain"
        />
      ) : (
        <Text style={Styles.mensagem}>Carregando gato...</Text>
      )}

      <CustomButton
        title="Buscar outro gato"
        onPress={() => Apis.buscaGato(setUrlGato)}
        style={Styles.button}
      />
    </View>
  );
}

export default GatoScreen;