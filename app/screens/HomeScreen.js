import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-elements';

const HomeScreen = () => {
  return (
    <View>
      <Text h1 style={styles.title}>
        Nubes Heladas
      </Text>
      <Image
        source={require('../../assets/img/logo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      <Text h4 style={styles.title}>
        Mantente informado acerca de tus necesidades climaticas para poder
        manejar tu negocio
      </Text>
      <Text style={styles.text}>
        Podes acceder direcamente a la informacion que necesitas con nuestro
        buscador potenciado o aprovechar los beneficios de crear tu propia
        cuenta y que nosotros recordemos tus sitios favoritos para un mas rapido
        acceso
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {alignSelf: 'center'},
  logo: {
    width: '100%',
    height: 150,
    marginVertical: 20,
  },
  text: {alignSelf: 'center', marginTop: 20, paddingHorizontal: 20},
});
