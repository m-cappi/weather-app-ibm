import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import colors from '../styles/palette';
import FavWeather from '../screens/Weather/FavWeather';

const Stack = createNativeStackNavigator();

const FavWeatherStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="fav-weather"
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
        name="fav-weather"
        component={FavWeather}
        options={{title: 'Mi Clima'}}
      />
    </Stack.Navigator>
  );
};

export default FavWeatherStack;
