import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AtividadesProvider } from './context/AtividadesContext';
import PerfilTabs from './screens/perfil/PerfilTabs';
import CadastroScreen from './screens/cadastro/CadastroScreen';
import AgendaScreen from './screens/agenda/AgendaScreen';
import TimersTabs from './screens/timers/TimersTabs';

const Drawer = createDrawerNavigator();

// O AtividadesProvider fica "por fora" de tudo, assim a tela de Cadastro
// e a tela de Agenda enxergam a mesma lista de atividades.
export default function App() {
  return (
    <AtividadesProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Perfil">
          <Drawer.Screen name="Perfil" component={PerfilTabs} />
          <Drawer.Screen name="Cadastro Atividade" component={CadastroScreen} />
          <Drawer.Screen name="Agenda" component={AgendaScreen} />
          <Drawer.Screen name="Timers" component={TimersTabs} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AtividadesProvider>
  );
}
