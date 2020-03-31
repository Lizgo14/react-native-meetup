import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//adding an image
import SampleIcon from './assets/icon.png'

export default function App() {
  return (

    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    <Image style={styles.stretch} source= {SampleIcon}/>
    </View>
  );
}

//can use this info to scale to device in style
const screenHeight = Dimensions.get('window').height
const screenWidth = Dimensions.get('window').width

//usually camelcase instead of dashes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretch:{
    width: screenWidth/2,
    height:400,
    resizeMode: 'stretch'
  }
});


//<View> is the same as <div>
//<Text> is the same as  <p>, <h1>....
//<Image> is the same as <img>
