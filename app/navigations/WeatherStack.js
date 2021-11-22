import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import colors from '../styles/palette';
import Weather from '../screens/Weather/Weather';

const Stack = createNativeStackNavigator();

const WeatherStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="weather"
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
        name="weather"
        component={Weather}
        options={{title: 'Clima'}}
      />
    </Stack.Navigator>
  );
};

export default WeatherStack;
