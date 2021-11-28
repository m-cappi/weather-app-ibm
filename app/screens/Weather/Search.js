import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import SearchBox from '../../components/Weather/SearchBox';

const Search = () => {
  return (
    <View>
      <Image
        source={require('../../../assets/img/logo.png')}
        resizeMode="contain"
        style={styles.logo}
      />
      <SearchBox />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 150,
    marginTop: 20,
  },
});
