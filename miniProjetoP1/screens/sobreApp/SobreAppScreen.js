import { View, Text } from 'react-native';
import Styles from './Style';

function SobreAppScreen() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.titulo}>Sobre o aplicativo</Text>
      <Text style={Styles.texto}>
        Projeto criado para avaliação prática da disciplina de Programação para dispositivos móveis.
      </Text>
      <Text style={Styles.texto}>Versão 1.0</Text>
    </View>
  );
}

export default SobreAppScreen;