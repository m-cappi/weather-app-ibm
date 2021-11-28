import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Image} from 'react-native-elements';
import {isEmpty, map} from 'lodash';
import {useNavigation} from '@react-navigation/native';
import Loading from '../Loading';
import {WeatherApiContext} from '../../weatherapi';
import colors from '../../styles/palette';

const WeatherList = ({cities, navigation}) => {
  const [weatherList, setWeatherList] = useState([]);
  const weatherApi = useContext(WeatherApiContext);
  console.log('CITIES');
  console.log(cities);
  console.log('WEATHERLIST');
  console.log(weatherList);

  useEffect(() => {
    (async () => {
      const promise = await new Promise.all(
        map(
          cities,
          async cityName =>
            await weatherApi.currentWeather(cityName).then(res => res.data),
        ),
      );
      setWeatherList(promise);
    })();
  }, []);

  return (
    <View>
      {weatherList.length === 0 ? (
        <View style={styles.viewLoading}>
          <ActivityIndicator size="large" color={colors.dark1} />
          <Text>Loading...</Text>
        </View>
      ) : (
        <FlatList
          data={weatherList}
          renderItem={city => (
            <WeatherItem city={city} navigation={navigation} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default WeatherList;

const styles = StyleSheet.create({
  loadingCitys: {marginVertical: 10, alignItems: 'center'},
  viewCity: {flexDirection: 'row', margin: 10},
  viewCityImg: {marginRight: 15},
  imgCity: {width: 80, height: 80},
  cityName: {fontWeight: 'bold'},
  cityAddress: {paddingTop: 2, color: 'grey'},
  cityDescription: {paddingTop: 2, color: 'grey', width: 300},
  endOfList: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
});

const WeatherItem = ({city, navigation}) => {
  const weather = city.item;
  const goDetailedView = () => {
    navigation.navigate('search-stack', {
      screen: 'search-result',
      params: {weather},
    });
  };
  const icon = [];
  console.log('WEATHER ITEM CITY!');
  console.log(city.item);
  return (
    <TouchableOpacity onPress={goDetailedView}>
      <View style={styles.viewCity}>
        <View style={styles.viewCityImg}>
          <Image
            resizeMode="cover"
            PlaceholderContent={<ActivityIndicator color="#212121" />}
            source={
              !isEmpty(icon)
                ? {uri: icon[0]}
                : require('../../../assets/img/no-image.png')
            }
            style={styles.imgCity}
          />
        </View>
        <View>
          <Text style={styles.cityName}>Nombre</Text>
          <Text style={styles.cityAddress}>algo</Text>
          <Text style={styles.cityDescription}>otro algo</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
