import {View} from 'react-native';
import React from 'react';
import TopBar from '../../components/topBar/TopBar';
import {styles} from './searchStyles';

export default function Search() {
  return (
    <View style={styles.container}>
      <TopBar icon="arrowleft" text="Search" />
    </View>
  );
}
