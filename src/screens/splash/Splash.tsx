import {View, Image, Text, StatusBar} from 'react-native';
import React from 'react';
import {styles} from './splashScreenStyels';

export default function SplashScreen() {
  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require('../../../assets/images/home-vector-white.png')}
        />
        <Text style={styles.home}>Home</Text>
        <Text style={styles.decor}>DECOR</Text>
      </View>
    </>
  );
}
