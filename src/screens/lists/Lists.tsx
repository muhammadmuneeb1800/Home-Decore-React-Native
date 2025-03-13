import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import TopBar from '../../components/topBar/TopBar';
import {styles} from './listsStyles';
import {useNavigation} from '@react-navigation/native';
import {navigationPropsStack} from '../../types/type';
import {CATEGORIES} from '../../constants/constants';

export default function Lists() {
  const navigation = useNavigation<navigationPropsStack>();
  return (
    <View style={styles.container}>
      <TopBar
        icon="arrowleft"
        text="Bedroom"
        icon1="search1"
        IconOnpress1={() => navigation.navigate('search')}
      />
      <ScrollView contentContainerStyle={styles.containerList}>
        <View style={styles.grid}>
          {CATEGORIES?.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.item, styles[item.size]]}>
              <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
