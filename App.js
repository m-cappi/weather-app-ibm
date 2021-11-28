import React from 'react';
//import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Navigation from './app/navigations/Navigation';
import { LogBox } from "react-native";
import firebase, {FirebaseContext} from './app/firebase';
import weatherApi, {WeatherApiContext} from './app/weatherapi';
LogBox.ignoreLogs([
  "Setting a timer",
  "It appears that",
  "Animated: `useNativeDriver`",
  "expo-permissions is now deprecated",
  " Cannot update a component",
]);
const App = () => {
  return (
    // <GestureHandlerRootView style={{flex: 1}}>
    <FirebaseContext.Provider value={{firebase}}>
      <WeatherApiContext.Provider value={weatherApi}>
        <Navigation />
      </WeatherApiContext.Provider>
    </FirebaseContext.Provider>
    //</GestureHandlerRootView>
  );
};

export default App;
