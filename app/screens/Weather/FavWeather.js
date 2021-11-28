import React, {useCallback, useContext, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {FirebaseContext} from '../../firebase';

import UserNotLogged from '../../components/UserNotLogged';
import NoFavorites from '../../components/NoFavorites';
import WeatherList from '../../components/Weather/WeatherList';

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
        (async () => {
          const cities = await firebase.getFavoritesId();
          const unique = [...new Set(cities)];
          setFavCities(unique);
        })();
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
        <WeatherList cities={favCities} navigation={navigation} />
      )}
    </>
  );
};

export default FavWeather;

const styles = StyleSheet.create({});
