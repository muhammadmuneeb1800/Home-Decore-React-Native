import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './myProfileStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TopBar from '../../components/topBar/TopBar';
import {COLORS} from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {navigationPropsStack} from '../../types/type';
import LogoutModal from '../../components/logoutModal/LogoutModal';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function MyProfile() {
  const [isOopen, setIsOpen] = useState<boolean>(false);
  const navigation = useNavigation<navigationPropsStack>();
  const handleClose = () => {
    setIsOpen(!isOopen);
  };
  return (
    <>
      <View style={styles.container}>
        <View>
          <TopBar
            icon="arrowleft"
            text="My Profile"
            icon2="circle-edit-outline"
            iconSize2={26}
            IconOnpress2={() => navigation.navigate('updateProfile')}
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
            <TouchableOpacity
              onPress={() => navigation.navigate('updateProfile')}
              style={styles.subCard}>
              <AntDesign name="user" size={35} color={COLORS.blackDark} />
              <Text style={styles.cardText}>Profile</Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity style={styles.subCard}>
              <AntDesign name="user" size={35} color={COLORS.blackDark} />
              <Text style={styles.cardText}>Wishlist</Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <TouchableOpacity
              style={styles.subCard}
              onPress={() => navigation.navigate('myOrders')}>
              <Ionicons
                name="pricetag-outline"
                size={35}
                color={COLORS.blackDark}
              />
              <Text style={styles.cardText}>My Orders</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.links}>
            <View style={styles.main}>
              <View style={styles.searchIcon}>
                <Foundation name="key" size={24} color={COLORS.blackDark} />
              </View>
              <TouchableOpacity>
                <Text style={styles.text}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.main}>
              <View style={styles.searchIcon}>
                <MaterialIcons
                  name="payment"
                  size={24}
                  color={COLORS.blackDark}
                />
              </View>
              <TouchableOpacity>
                <Text style={styles.text}>Payment Methods</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.main}>
              <View style={styles.searchIcon}>
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color={COLORS.blackDark}
                />
              </View>
              <TouchableOpacity>
                <Text style={styles.text}>Notification</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.main}>
              <View style={styles.searchIcon}>
                <Ionicons
                  name="settings-outline"
                  size={24}
                  color={COLORS.blackDark}
                />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('updatePassword')}>
                <Text style={styles.text}>Settings</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.main}>
              <View style={styles.searchIcon}>
                <MaterialIcons
                  name="contact-support"
                  size={24}
                  color={COLORS.blackDark}
                />
              </View>
              <TouchableOpacity>
                <Text style={styles.text}>Help</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.main}>
              <View style={styles.searchIcon}>
                <Ionicons
                  name="log-in-outline"
                  size={27}
                  color={COLORS.blackDark}
                />
              </View>
              <TouchableOpacity onPress={() => setIsOpen(!isOopen)}>
                <Text style={styles.text}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {isOopen && <LogoutModal close={handleClose} isVisible={isOopen} />}
    </>
  );
}
