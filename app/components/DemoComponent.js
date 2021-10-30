import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native-elements';

const DemoComponent = () => {
  const imgPath = require('../assets/img/h-goku.png');
  return (
    <View style={styles.view}>
      <Text>DemoComponent...</Text>
      <Image
        source={imgPath}
        style={styles.img}
        resizeMethod="resize"
        resizeMode="contain"
        PlaceholderContent={<ActivityIndicator />}
      />
    </View>
  );
};

export default DemoComponent;

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center'},
  img: {width: 200, height: 200},
});
