import { View, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Styles from './Style';

function HomeScreen() {
  return (
    <View style={Styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require('../../assets/images/logo.png')}
        style={Styles.logo}
      />
      <Text style={Styles.titulo}>Projeto P1</Text>
      <Text style={Styles.nome}>Aluno: Pedro de Paula Lacerda</Text>
    </View>
  );
}

export default HomeScreen;