import React from 'react';
import {ActivityIndicator, FlatList, StatusBar, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native-elements';

const IMAGES ={
  image1: require('../../assets/img/1.png'),
  image2: require('../../assets/img/2.png'),
  image3: require('../../assets/img/3.png'),
  image4: require('../../assets/img/4.png'),
  image5: require('../../assets/img/5.png')
}


const DATA = [
  {
    id: '1',
    title: "IARA NUSS",
    image: IMAGES.image1,
  },
  {
    id: '2',
    title: 'EUGENIA BAQUERO',
    image: IMAGES.image2,
  },
  {
    id: '3',
    title: 'MARTIN CAPPI',
    image: IMAGES.image3,
  },
  {
    id: '4',
    title: 'MAXIMILIANO',
    image: IMAGES.image4,
  },
  {
    id: '5',
    title: 'DIANA FIGUEROA',
    image: IMAGES.image5,
  },

];

const Item = ({ title, subtitle }) => (

  <View style={styles.item}>
  <Text style={styles.title}>{title}</Text>
  </View>
);

const DemoQuienesComponent = () => {
  const renderItem = ({ item }) => (
    <View>
    <Image
        style={styles.image}
        source={item.image}
      />
    <Item title={item.title}/>
    </View>
  )

  return (

    <View>
<Text style={styles.texto}>Como programadores principiantes estamos afrontando nuestro primer desafío en el desarrollo de aplicaciones móviles. Utilizamos todas las herramientas de React Native a nuestra disposición para armar este proyecto.</Text>
    <View>
      <SafeAreaView style={styles.container}>
      
        <FlatList
          data={DATA}
          numColumns={1}
          renderItem={renderItem}
          keyExtractor={item => item.id} />
      </SafeAreaView>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:200,
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginLeft: 100
  },
  item: {
    backgroundColor: '#E9B269',
    padding: 10,
    marginVertical: 8,
    flex:1,
  },
  title: {
    marginLeft:40,
    fontSize: 14,
    fontWeight: "bold"
  },
  image:{
    width: 30, height: 30,
      },
  texto:{
    color:'#CE1F1F',
    fontStyle:"italic",
    fontWeight:"bold",
    textAlign: "center",
    width:400
  }
  
});

export default DemoQuienesComponent;