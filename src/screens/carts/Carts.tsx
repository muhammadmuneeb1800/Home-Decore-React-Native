import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './cartsStyles';
import TopBar from '../../components/topBar/TopBar';

export default function Carts() {
  return (
    <View style={styles.container}>
      <TopBar
        icon="arrowleft"
        text="My Cart"
        icon2="circle-edit-outline"
        iconSize2={26}
      />
      <Text>carts</Text>
    </View>
  );
}
