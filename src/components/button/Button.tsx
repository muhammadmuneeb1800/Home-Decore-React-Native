import {Text, TouchableOpacity} from 'react-native';
import {styles} from './buttonStyles';

interface buttonTypes {
  text: string;
  onPress?: () => void;
}

export default function Button(props: buttonTypes) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={props.text === 'Sign Up' ? styles.button2 : styles.button}>
      <Text
        style={
          props.text === 'Sign Up' ? styles.buttonText2 : styles.buttonText
        }>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}
