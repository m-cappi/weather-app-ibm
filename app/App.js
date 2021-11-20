import React from 'react';
//import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Navigation from './navigations/Navigation';
import firebase, {FirebaseContext} from './firebase';

const App = () => {
  return (
    // <GestureHandlerRootView style={{flex: 1}}>
    <FirebaseContext.Provider value={{firebase}}>
      <Navigation />
    </FirebaseContext.Provider>
    //</GestureHandlerRootView>
  );
};

export default App;
