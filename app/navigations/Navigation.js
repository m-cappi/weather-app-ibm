import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

import DemoStack from './DemoStack';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="demo-stack"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: '#00a680',
          tabBarInactiveTintColor: '#646464',
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
    default:
      iconName = 'alert-decagram';
      iconType = 'material-community';
      break;
  }
  return <Icon type={iconType} name={iconName} size={22} color={color} />;
};
