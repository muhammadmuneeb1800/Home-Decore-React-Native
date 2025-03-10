import {View, Text} from 'react-native';
import {styles} from './updatePasswordStyles';
import TopBar from '../../components/topBar/TopBar';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

export default function UpdatePassword() {
  return (
    <View style={styles.container}>
      <TopBar icon="arrowleft" text="Password Settings" />
      <View style={styles.form}>
        <View style={styles.formTop}>
          <Input
            secureTextEntry={true}
            title="Current Password"
            placeholder="current password"
          />
        </View>
        <Text style={styles.forgot}>Forgot Password?</Text>
        <View style={styles.formTop}>
          <Input
            secureTextEntry={true}
            title="New Password"
            placeholder="current password"
          />
        </View>
        <View style={styles.formTop}>
          <Input
            secureTextEntry={true}
            title="Confirm New Password"
            placeholder="current password"
          />
        </View>
        <View style={styles.btn}>
          <Button text="Change Password" />
        </View>
      </View>
    </View>
  );
}
