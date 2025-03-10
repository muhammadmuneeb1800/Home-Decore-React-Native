import {View, Text, TextInput} from 'react-native';
import {styles} from './forgotPasswordStyles';
import TopBar from '../../components/topBar/TopBar';
import Button from '../../components/button/Button';

export default function ForgotPassword() {
  return (
    <>
      <View style={styles.container}>
        <TopBar text="forgot Password" icon="arrowleft" />
        <View style={styles.main}>
          <Text style={styles.reset}>Reset Password?</Text>
          <Text style={styles.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
          </Text>
        </View>
      </View>
      <View style={styles.formWhite}>
        <View style={styles.form}>
          <View>
            <Text style={styles.lable}>Enter your email address</Text>
            <TextInput
              style={styles.input}
              placeholder="example@example.com"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.next}>
            <Button text="Next" />
          </View>
        </View>
      </View>
    </>
  );
}
