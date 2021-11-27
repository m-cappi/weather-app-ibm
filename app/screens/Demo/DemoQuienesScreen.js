import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import DemoQuienesComponent from '../../components/DemoQuienesComponent';

const DemoQuienesScreen = () => {
  return (
    <View style={styles.view}>
      <Text></Text>
      <DemoQuienesComponent />
    </View>
  );
};

export default DemoQuienesScreen;

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center'},
});