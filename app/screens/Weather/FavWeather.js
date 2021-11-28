import React, {useCallback, useContext, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {FirebaseContext} from '../../firebase';

import UserNotLogged from '../../components/UserNotLogged';
import NoFavorites from '../../components/NoFavorites';

const FavWeather = ({navigation}) => {
  const [isUserLogged, setIsUserLogged] = useState(null);
  const [favCities, setFavCities] = useState([]);

  const {firebase} = useContext(FirebaseContext);

  firebase.auth.onAuthStateChanged(user => {
    user ? setIsUserLogged(true) : setIsUserLogged(false);
  });

  useFocusEffect(
    useCallback(() => {
      if (isUserLogged) {
        (async () => {})();
      }
    }, [isUserLogged]),
  );

  return (
    <>
      {!isUserLogged ? (
        <UserNotLogged navigation={navigation} />
      ) : favCities.length === 0 ? (
        <NoFavorites navigation={navigation} />
      ) : (
        <View>
          <Text>Mi clima favorito</Text>
        </View>
      )}
    </>
  );
};

export default FavWeather;

const styles = StyleSheet.create({});
