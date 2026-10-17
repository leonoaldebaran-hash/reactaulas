import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SobreAppScreen from '../sobreApp/SobreAppScreen';
import PerfilScreen from '../perfil/PerfilScreen';

const Tab = createBottomTabNavigator();

function SobreScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#34497a',
      }}
    >
      <Tab.Screen
        name="SobreApp"
        component={SobreAppScreen}
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="information-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default SobreScreen;