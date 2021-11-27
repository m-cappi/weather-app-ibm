import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-elements';

import DemoComponent from '../../components/DemoComponent';
import DemoQuienesComponent from '../../components/DemoQuienesComponent';

const DemoScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      <Text>DemoScreen...</Text>
      <DemoComponent />
      <Button
        onPress={() => navigation.navigate('demo-sub')}
        title="Go to sub-demo"
      />
      <Button
        onPress={() => navigation.navigate('demo-quienes')}
        title="quienes"
      />
    </View>
  );
};

export default DemoScreen;

const styles = StyleSheet.create({
  view: {flex: 1, alignItems: 'center'},
});
