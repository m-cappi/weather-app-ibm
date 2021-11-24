import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import colors from '../styles/palette';
import Account from '../screens/Account/Account';
import Login from '../screens/Account/Login';
import Register from '../screens/Account/Register';

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="account"
      screenOptions={() => ({
        headerStyle: {
          backgroundColor: colors.med3,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}>
      <Stack.Screen
        name="account"
        component={Account}
        options={{title: 'Mi Perfil'}}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{title: 'Inicia Sesion'}}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{title: 'Registrate'}}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
