import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './topBarStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constants/colors';

interface TopBarProps {
  text?: string;
  icon?: string;
  mainText?: string;
  icon1?: string;
  icon2?: string;
  icon3?: string;
  iconSize1?: number;
  iconSize2?: number;
  iconSize3?: number;
  IconOnpress1?: () => void;
  IconOnpress2?: () => void;
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
        <Text style={props.text === 'Search' ? styles.title1 : styles.title}>
          {props.text}
        </Text>
      </View>
      <View style={styles.icons}>
        {props.icon1 && (
          <TouchableOpacity
            onPress={props.IconOnpress1}
            style={props.icon1 === 'search1' ? styles.searchIcon : undefined}>
            <AntDesign
              name={props.icon1}
              size={props.iconSize1 || 24}
              color={
                props.icon1 === 'search1' ? COLORS.blackDark : COLORS.primary
              }
            />
          </TouchableOpacity>
        )}
        {props.icon2 && (
          <TouchableOpacity onPress={props.IconOnpress2}>
            <MaterialCommunityIcons
              name={props.icon2}
              size={props.iconSize2 || 24}
              color={COLORS.primary}
            />
          </TouchableOpacity>
        )}
        {props.icon3 && (
          <TouchableOpacity>
            <AntDesign
              name={props.icon3}
              size={props.iconSize3 || 24}
              color={COLORS.primary}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
