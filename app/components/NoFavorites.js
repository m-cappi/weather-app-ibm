import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import colors from '../styles/palette';

const NoFavorites = ({navigation}) => {
  const goSearch = () => {
    navigation.navigate('search-stack');
  };
  return (
    <View style={styles.view}>
      <Icon
        type="material-community"
        name="alert-outline"
        size={50}
        onPress={goSearch}
      />
      <Text style={styles.text}>No tenes ninguna ciudad guardada.</Text>
      <Text style={styles.link} onPress={goSearch}>
        Vamos a buscar!
      </Text>
    </View>
  );
};

export default NoFavorites;

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {marginTop: 15, alignSelf: 'center', fontSize: 20},
  link: {
    color: colors.light1,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 20,
  },
});
