import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SearchResult = ({navigation, route}) => {
  const {weather} = route.params;

  useEffect(() => {
    if (weather?.name) {
      navigation.setOptions({title: weather.name});
    }
  }, [weather]);

  return (
    <View>
      <Text>Resultado: {weather.name}</Text>
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({});
