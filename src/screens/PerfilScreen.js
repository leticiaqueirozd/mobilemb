import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PerfilScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/favicon.png')} style={styles.profileImage} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>Leticia Queiroz</Text>
        <Text style={styles.biography}>Biozinha simples só pra dizer que tem</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  imageContainer: {
    marginLeft: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  detailsContainer: {
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  biography: {
    fontSize: 16,
    width: 175,
  },
});

export default PerfilScreen;