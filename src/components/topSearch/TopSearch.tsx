import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './topSearchStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../constants/colors';

export default function TopSearch({item}: any) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.icon}>
        <AntDesign name={'search1'} size={25} color={COLORS.blackDark} />
      </View>
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
}
