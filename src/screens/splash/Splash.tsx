import {View, Image, Text, StatusBar} from 'react-native';
import React from 'react';
import {styles} from './splashStyels';

export default function Splash() {
  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require('../../assets/images/home-vector-white.png')}
        />
        <Text style={styles.home}>Home</Text>
        <Text style={styles.decor}>DECOR</Text>
      </View>
    </>
  );
}
