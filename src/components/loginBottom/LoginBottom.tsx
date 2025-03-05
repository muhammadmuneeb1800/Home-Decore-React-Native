import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './loginBottomStyles';

export default function LoginBottom() {
  return (
    <View>
      <Text style={styles.an}>or sign in with</Text>
      <View style={styles.icons}>
        <TouchableOpacity>
          <Image source={require('../../assets/images/facebook-icon.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/images/google-icon.png')} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.dont}>
        <Text style={styles.an}>Don't have an account? </Text>
        <Text style={styles.up}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
