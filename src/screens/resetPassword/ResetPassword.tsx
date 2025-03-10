import {View, Text} from 'react-native';
import {styles} from './resetPasswordStyles';
import TopBar from '../../components/topBar/TopBar';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

export default function ResetPassword() {
  return (
    <View style={styles.container}>
      <TopBar text="Set Password" icon="arrowleft" />
      <View style={styles.main}>
        <Text style={styles.change}>Change The Password</Text>
        <Text style={styles.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </Text>
      </View>
      <View style={styles.form}>
        <View style={styles.input}>
          <Input
            title="Password"
            placeholder="New password"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.input}>
          <Input
            title="Confirm Password"
            placeholder="Confirm new password"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.reset}>
          <Button text="Reset Password" />
        </View>
      </View>
    </View>
  );
}
