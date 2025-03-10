import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './loginStyles';
import useLogin from '../../hooks/useLogin/useLogin';
import TopBar from '../../components/topBar/TopBar';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import LoginBottom from '../../components/loginBottom/LoginBottom';
export default function Login() {
  const {
    email,
    password,
    setEmail,
    setPassword,
    handleSubmit,
    navigationStack,
  } = useLogin();
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TopBar text="Login" icon="arrowleft" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={styles.main}>
            <Text style={styles.wel}>Welcome</Text>
            <Text style={styles.please}>
              Please enter your details to proceed.
            </Text>
            <View style={styles.form}>
              <View style={styles.input}>
                <Input
                  value={email}
                  onChangeText={setEmail}
                  title="Username or email"
                  placeholder="example@example.com"
                  keyboardType="email-address"
                />
              </View>
              <View style={styles.input}>
                <Input
                  value={password}
                  onChangeText={setPassword}
                  title="Password"
                  placeholder="password"
                  keyboardType="default"
                  secureTextEntry={true}
                />
              </View>
              <View style={styles.btns}>
                <Button onPress={() => handleSubmit()} text="Login" />
                <TouchableOpacity
                  onPress={() => navigationStack.navigate('forgot')}>
                  <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.last}>
            <LoginBottom />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
