import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './cartItemStyles';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS} from '../../constants/colors';
import {useState} from 'react';

export default function CartItem() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.img}>Image</View>
      <View>
        <View style={styles.TextDiv}>
          <Text style={styles.title}>Serenity Nightstand</Text>
          <View style={styles.icons}>
            <TouchableOpacity
              style={styles.minus}
              onPress={() => {
                if (count > 0) {
                  setCount(count - 1);
                }
              }}>
              <Entypo name="minus" size={21} color={COLORS.primary} />
            </TouchableOpacity>
            <Text style={styles.counterText}>{count}</Text>
            <TouchableOpacity onPress={() => setCount(count + 1)}>
              <Entypo
                name="circle-with-plus"
                size={24}
                color={COLORS.primaryDark}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.dollor}>$750</Text>
      </View>
    </View>
  );
}
