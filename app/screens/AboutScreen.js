import React from 'react';
import {StyleSheet, View} from 'react-native';
import DemoQuienesComponent from '../components/DemoQuienesComponent';

const AboutScreen = () => {
  return (
    <View style={styles.view}>
      <DemoQuienesComponent />
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center'},
});
