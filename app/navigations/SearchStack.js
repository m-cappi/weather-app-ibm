import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import colors from '../styles/palette';
import Search from '../screens/Weather/Search';
import SearchResult from '../screens/Weather/SearchResult';

const Stack = createNativeStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="search"
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
        name="search"
        component={Search}
        options={{title: 'Busqueda'}}
      />
      <Stack.Screen
        name="search-result"
        component={SearchResult}
        options={{title: 'Busqueda'}}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
