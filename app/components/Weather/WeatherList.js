import React, {useCallback, useContext, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {Image} from 'react-native-elements';
import {map} from 'lodash';

import {WeatherApiContext} from '../../weatherapi';
import colors from '../../styles/palette';

const WeatherList = ({cities, navigation}) => {
  const [weatherList, setWeatherList] = useState([]);
  const weatherApi = useContext(WeatherApiContext);

  useFocusEffect(
    useCallback(() => {
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
    }, [cities]),
  );

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
            <WeatherItem
              city={city}
              navigation={navigation}
              weatherApi={weatherApi}
            />
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
  viewCityImg: {marginRight: 15, backgroundColor: '#fcfcfc', borderRadius: 30},
  imgCity: {width: 80, height: 80},
  cityName: {fontWeight: 'bold'},
  cityAddress: {paddingTop: 2, color: 'grey'},
  cityDescription: {paddingTop: 2, color: 'grey', width: 300},
  endOfList: {
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  avatarContainer: {
    marginRight: 20,
    backgroundColor: '#fcfcfc',
  },
});

const WeatherItem = ({city, navigation, weatherApi}) => {
  const weather = city.item;

  const goDetailedView = () => {
    navigation.navigate('search-stack', {
      screen: 'search-result',
      params: {weather},
    });
  };

  const iconUrl = weatherApi.getLargeIcon(weather.weather[0].icon);

  return (
    <TouchableOpacity onPress={goDetailedView}>
      <View style={styles.viewCity}>
        <View style={styles.viewCityImg}>
          <Image
            resizeMode="cover"
            PlaceholderContent={<ActivityIndicator color="#212121" />}
            source={
              iconUrl
                ? {uri: iconUrl}
                : require('../../../assets/img/no-image.png')
            }
            style={styles.imgCity}
          />
        </View>
        <View>
          <Text style={styles.cityName}>
            {weather.name}, {weather.sys.country}
          </Text>
          <Text style={styles.cityAddress}>
            {weather.weather[0].description}
          </Text>
          <Text style={styles.cityDescription}>{weather.main.temp} °C</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
