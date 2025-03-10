import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './updateProfileStyles';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import TopBar from '../../components/topBar/TopBar';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

export default function UpdateProfile() {
  return (
    <>
      <View style={styles.container}>
        <TopBar icon="arrowleft" text="My Profile" />
        <View style={styles.img}>
          <Image source={require('../../assets/images/profile.png')} />
          <TouchableOpacity style={styles.icon}>
            <SimpleLineIcons name="camera" size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.name}>Madison Smith</Text>
        <View style={styles.mainId}>
          <Text style={styles.id}>ID: </Text>
          <Text style={styles.num}>25030024</Text>
        </View>
      </View>
      <View style={styles.form}>
        <View>
          <Input title="Full Name" placeholder="Your name" />
        </View>
        <View style={styles.formTop}>
          <Input title="Email" placeholder="Your email" />
        </View>
        <View style={styles.formTop}>
          <Input title="Mobile Number" placeholder="Your phone number" />
        </View>
        <View style={styles.formTop}>
          <Input title="Date of birth" placeholder="Your date of birth" />
        </View>
        <View style={styles.btn}>
          <Button text="Update Profile" />
        </View>
      </View>
    </>
  );
}
