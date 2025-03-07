import {View, Text, Image} from 'react-native';
import {styles} from './getStartedScreenStyles';
import Button from '../../../components/button/Button';
export default function GetStartedScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imgBox}>
        <Image source={require('../../../assets/images/home-vector.png')} />
        <Text style={styles.homeText}>HOME</Text>
        <Text style={styles.decorText}>DECOR</Text>
      </View>
      <View style={styles.buttons}>
        <Text style={styles.paraText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </Text>
        <Button text="Log In" />
        <Button text="Sign up" />
      </View>
    </View>
  );
}
