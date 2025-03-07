import {View, Text} from 'react-native';
import {styles} from './linksStyles';
import Icons from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../constants/colors';
import {linksProps} from '../../types/type';

export default function Links(props: linksProps) {
  return (
    <View style={styles.main}>
      <View style={styles.searchIcon}>
        <Icons name={props.icon as string} size={24} color={COLORS.blackDark} />
      </View>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}
