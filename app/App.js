import React from 'react';
//import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Navigation from './navigations/Navigation';
import firebase, {FirebaseContext} from './firebase';
import weatherApi, {WeatherApiContext} from './weatherapi';

const App = () => {
  return (
    // <GestureHandlerRootView style={{flex: 1}}>
    <FirebaseContext.Provider value={{firebase}}>
      <WeatherApiContext.Provider value={{weatherApi}}>
        <Navigation />
      </WeatherApiContext.Provider>
    </FirebaseContext.Provider>
    //</GestureHandlerRootView>
  );
};

export default App;
