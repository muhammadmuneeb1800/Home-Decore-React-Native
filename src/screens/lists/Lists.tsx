import {View, Text} from 'react-native';
import React from 'react';
import TopBar from '../../components/topBar/TopBar';
import {styles} from './listsStyles';
import {useNavigation} from '@react-navigation/native';
import {navigationPropsStack} from '../../types/type';

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
      <Text>Lists</Text>
    </View>
  );
}
