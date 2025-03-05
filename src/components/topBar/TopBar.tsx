import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './topBarStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constants/colors';

interface TopBarProps {
  text?: string;
  icon?: string;
  searchIcon?: string;
  mainText?: string;
}

export default function TopBar(props: TopBarProps) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {props.icon && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name={props.icon} size={25} color={COLORS.black} />
        </TouchableOpacity>
      )}
      {props.mainText && (
        <View>
          <Text style={styles.hi}>Hi, {props.mainText} Back</Text>
          <Text style={styles.joy}>Create spaces that bring joy</Text>
        </View>
      )}

      <View>
        <Text style={styles.title}>{props.text}</Text>
      </View>
      {props.searchIcon ? (
        <TouchableOpacity style={styles.searchIcon}>
          <AntDesign name="search1" size={24} color={COLORS.blackDark} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
}
