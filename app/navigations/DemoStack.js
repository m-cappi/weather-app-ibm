import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DemoScreen from '../screens/Demo/DemoScreen';
import DemoSubScreen from '../screens/Demo/DemoSubScreen';

const Stack = createNativeStackNavigator();

const DemoStack = () => {
  return (
    <Stack.Navigator initialRouteName="demo">
      <Stack.Screen
        name="demo"
        component={DemoScreen}
        options={{title: 'Screen demostrativo'}}
      />
      <Stack.Screen
        name="demo-sub"
        component={DemoSubScreen}
        options={{title: 'Sub-screen demostrativo'}}
      />
    </Stack.Navigator>
  );
};

export default DemoStack;
