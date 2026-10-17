import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Styles from './Style';

function PerfilScreen() {
  return (
    <ScrollView style={Styles.container} contentContainerStyle={Styles.conteudo}>
      <View style={Styles.cabecalho}>
        <Text style={Styles.nome}>Pedro Lacerda</Text>
        <Text style={Styles.email}>pedro.lacerda@fatecpg.com</Text>
      </View>

      <View style={Styles.cartao}>
        <View style={Styles.linha}>
          <MaterialCommunityIcons name="school-outline" size={22} color="#34497a" />
          <Text style={Styles.rotulo}>Curso</Text>
          <Text style={Styles.valor}>ADS</Text>
        </View>
        <View style={Styles.linha}>
          <MaterialCommunityIcons name="calendar-month-outline" size={22} color="#34497a" />
          <Text style={Styles.rotulo}>Semestre</Text>
          <Text style={Styles.valor}>4º</Text>
        </View>
        <View style={Styles.linha}>
          <MaterialCommunityIcons name="map-marker-outline" size={22} color="#34497a" />
          <Text style={Styles.rotulo}>Cidade</Text>
          <Text style={Styles.valor}>Praia Grande</Text>
        </View>
        <View style={Styles.linha}>
          <MaterialCommunityIcons name="phone-outline" size={22} color="#34497a" />
          <Text style={Styles.rotulo}>Telefone</Text>
          <Text style={Styles.valor}>(13) 90000-0000</Text>
        </View>
      </View>

      <TouchableOpacity
        style={Styles.botao}
        onPress={() => alert('Perfil fake: esta tela é apenas layout.')}
      >
        <Text style={Styles.textoBotao}>Editar perfil</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default PerfilScreen;