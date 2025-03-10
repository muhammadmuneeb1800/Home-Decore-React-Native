import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './myProfileStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TopBar from '../../components/topBar/TopBar';
import {COLORS} from '../../constants/colors';
import {LINKS} from '../../constants/constants';
import Links from '../../components/links/Links';

export default function MyProfile() {
  return (
    <View style={styles.container}>
      <View>
        <TopBar
          icon="arrowleft"
          text="My Profile"
          icon2="circle-edit-outline"
          iconSize2={26}
        />
        <View style={styles.mainProfile}>
          <Image source={require('../../assets/images/profile.png')} />
          <Text style={styles.name}>Madison Smith</Text>
          <View style={styles.mainId}>
            <Text style={styles.id}>ID: </Text>
            <Text style={styles.num}>25030024</Text>
          </View>
        </View>
        <View style={styles.card}>
          <TouchableOpacity style={styles.subCard}>
            <AntDesign name="user" size={35} color={COLORS.blackDark} />
            <Text style={styles.cardText}>Profile</Text>
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.subCard}>
            <AntDesign name="user" size={35} color={COLORS.blackDark} />
            <Text style={styles.cardText}>Wishlist</Text>
          </TouchableOpacity>
          <View style={styles.line} />
          <TouchableOpacity style={styles.subCard}>
            <Ionicons
              name="pricetag-outline"
              size={35}
              color={COLORS.blackDark}
            />
            <Text style={styles.cardText}>My Orders</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.links}>
          {LINKS?.map(link => (
            <Links key={link.title} {...link} />
          ))}
        </View>
      </View>
    </View>
  );
}
