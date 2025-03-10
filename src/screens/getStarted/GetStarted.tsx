import {View, Text, Image} from 'react-native';
import {styles} from './getStartedStyles';
import Button from '../../components/button/Button';
import {useNavigation} from '@react-navigation/native';
import {navigationProps} from '../../types/type';
export default function GetStarted() {
  const navigation = useNavigation<navigationProps>();
  return (
    <View style={styles.container}>
      <View style={styles.imgBox}>
        <Image source={require('../../assets/images/home-vector.png')} />
        <Text style={styles.homeText}>HOME</Text>
        <Text style={styles.decorText}>DECOR</Text>
      </View>
      <View style={styles.buttons}>
        <Text style={styles.paraText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </Text>
        <Button onPress={() => navigation.navigate('login')} text="Log In" />
        <Button
          onPress={() => navigation.navigate('register')}
          text="Sign up"
        />
      </View>
    </View>
  );
}
