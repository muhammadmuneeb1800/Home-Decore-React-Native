import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './orderCardStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS} from '../../constants/colors';

export default function OrderCard() {
  return (
    <>
      <View style={styles.order}>
        <Text style={styles.orderText}>Order: Delivered</Text>
        <Text style={styles.orderText}>May 15</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.main}>
        <View style={styles.img}>Image</View>
        <View style={styles.data}>
          <View style={styles.icons}>
            <Text style={styles.name}>Serenity Nightstand</Text>
            <View style={styles.iconsFlex}>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="delete-circle-outline"
                  size={26}
                  color={COLORS.primary}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo
                  name="circle-with-plus"
                  size={26}
                  color={COLORS.primary}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.desc}>
            In a laoreet purus. Integer turpis quam, laoreet id orci nec,
            ultrices...
          </Text>
          <View style={styles.price}>
            <Text style={styles.dollor}>$7.50</Text>
            <Text style={styles.dollor}>1x uds.</Text>
            <Text style={styles.dollor}>Total: $7.50</Text>
          </View>
        </View>
      </View>
    </>
  );
}
