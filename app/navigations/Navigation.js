import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {StatusBar} from 'react-native';

import colors from '../styles/palette';
import DemoStack from './DemoStack';
import AccountStack from './AccountStack';
import SearchStack from './SearchStack';
import AboutStack from './AboutStack';
import FavWeatherStack from './FavWeatherStack';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={colors.med3} />
      <Tab.Navigator
        initialRouteName="demo-stack"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveBackgroundColor: colors.med3,
          tabBarInactiveBackgroundColor: colors.dark2,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#fff',
          tabBarIcon: ({color}) => screenOptions(route, color),
        })}>
        {/* <Tab.Screen
                    name="your navigation route identifier"
                    options={{ title: "your tab button title" }}
                    component={your navigation stack}
                /> */}
        <Tab.Screen
          name="demo-stack"
          component={DemoStack}
          options={{title: 'Demo'}}
        />
        <Tab.Screen
          name="about-stack"
          component={AboutStack}
          options={{title: 'Nosotros'}}
        />
        <Tab.Screen
          name="weather-stack"
          component={FavWeatherStack}
          options={{title: 'Mi Clima'}}
        />
        <Tab.Screen
          name="search-stack"
          component={SearchStack}
          options={{title: 'Buscar'}}
        />
        <Tab.Screen
          name="account-stack"
          component={AccountStack}
          options={{title: 'Mi Perfil'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const screenOptions = (route, color) => {
  let iconName;
  let iconType;
  switch (route.name) {
    case 'demo-stack':
      iconName = 'space-shuttle';
      iconType = 'font-awesome';
      break;
    case 'account-stack':
      iconName = 'home-outline';
      iconType = 'material-community';
      break;
    case 'about-stack':
      iconName = 'compass-outline';
      iconType = 'material-community';
      break;
    case 'weather-stack':
      iconName = 'white-balance-sunny';
      iconType = 'material-community';
      break;
    case 'search-stack':
      iconName = 'search';
      iconType = 'material';
      break;
    default:
      iconName = 'alert-decagram';
      iconType = 'material-community';
      break;
  }
  return <Icon type={iconType} name={iconName} size={22} color={color} />;
};
