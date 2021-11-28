import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Icon, Button} from 'react-native-elements';
import colors from '../styles/palette';

const UserNotLogged = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Icon type="material-community" name="alert-outline" size={50} />
      <Text style={styles.text}>Necesitas estar logeado!</Text>
      <Button
        title="Inicia sesion!"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={() => navigation.navigate('account-stack')}
      />
    </View>
  );
};

export default UserNotLogged;

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 20, fontWeight: 'bold', textAlign: 'center'},
  btnContainer: {marginTop: 20, width: '80%'},
  btn: {backgroundColor: colors.light1},
});
