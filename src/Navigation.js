import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ChatScreen from './screens/ChatScreen'; 
import ContatosScreen from './screens/ContatoScreen';
import PerfilScreen from './screens/PerfilScreen';
import HistoricoScreen from './screens/HistoricoScreen';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="nav">
        <Drawer.Screen name="Chat" component={ChatScreen} />
        <Drawer.Screen name="Contatos" component={ContatosScreen} />
        {/* <Drawer.Screen name="Histórico" component={HistoricoScreen} /> */}
        <Drawer.Screen name="Perfil" component={PerfilScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;