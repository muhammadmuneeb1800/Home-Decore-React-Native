import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Facebook from '../../assets/icons/facebook.svg';
import Google from '../../assets/icons/google.svg';
import {styles} from './loginBottomStyles';
import {useNavigation} from '@react-navigation/native';
import {navigationProps} from '../../types/type';

export default function LoginBottom() {
  const navigation = useNavigation<navigationProps>();
  return (
    <>
      <Text style={styles.an}>or sign in with</Text>
      <View style={styles.icons}>
        <TouchableOpacity>
          <Facebook width={40} height={40} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Google width={39} height={39} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.dont}
        onPress={() => navigation.navigate('register')}>
        <Text style={styles.an}>Don't have an account? </Text>
        <Text style={styles.up}>Sign Up</Text>
      </TouchableOpacity>
    </>
  );
}
