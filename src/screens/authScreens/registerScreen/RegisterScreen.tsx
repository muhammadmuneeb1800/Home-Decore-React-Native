import {ScrollView, Text, View} from 'react-native';
import Input from '../../../components/input/Input';
import TopBar from '../../../components/topBar/TopBar';
import {styles} from './registerScreenStyles';
import LoginBottom from '../../../components/loginBottom/LoginBottom';
import Button from '../../../components/button/Button';
import useRegister from '../../../hooks/useRegister/useRegister';

export default function RegisterScreen() {
  const {
    name,
    email,
    phoneNumber,
    dob,
    password,
    setName,
    setEmail,
    setPhoneNumber,
    setDob,
    setPassword,
    handleSubmit,
  } = useRegister();
  return (
    <View style={styles.container}>
      <TopBar text="Create Account" icon="arrowleft" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={styles.form}>
            <View style={styles.input}>
              <Input
                value={name}
                onChangeText={setName}
                title="Full Name"
                placeholder="full name"
                keyboardType="default"
              />
            </View>
            <View style={styles.input}>
              <Input
                value={email}
                onChangeText={setEmail}
                title="Email"
                placeholder="example@example.com"
                keyboardType="email-address"
              />
            </View>
            <View style={styles.input}>
              <Input
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                title="Mobile Number"
                placeholder="+ 123 456 789"
                keyboardType="phone-pad"
              />
            </View>
            <View style={styles.input}>
              <Input
                value={dob}
                onChangeText={setDob}
                title="Date of birth"
                placeholder="DD / MM /YYY"
              />
            </View>
            <View style={styles.input}>
              <Input
                value={password}
                onChangeText={setPassword}
                title="Password"
                placeholder="Password"
                keyboardType="default"
              />
            </View>
            <View style={styles.terms}>
              <Text style={styles.by}>By continuing, you agree to</Text>
              <Text style={styles.use}>Terms of Use </Text>
              <Text style={styles.and}>and</Text>
              <Text style={styles.policy}> Privacy Policy.</Text>
            </View>
            <View style={styles.sign}>
              <Button onPress={handleSubmit} text="Sign up" />
            </View>
          </View>
          <View style={styles.last}>
            <View style={styles.top}>
              <LoginBottom />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
