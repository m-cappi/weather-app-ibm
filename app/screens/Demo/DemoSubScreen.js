import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import DemoComponent from '../../components/DemoComponent';

const DemoSubScreen = () => {
  return (
    <View style={styles.view}>
      <Text>DemoSubScreen...</Text>
      <DemoComponent />
    </View>
  );
};

export default DemoSubScreen;

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center'},
});
