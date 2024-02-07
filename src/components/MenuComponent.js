import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MenuComponent = ({ navigation }) => {
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => navigateTo('Contatos')}>
        <Text>Contatos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('Chat')}>
        <Text>Chat</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateTo('Perfil')}>
        <Text>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuComponent;