import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './collectionCardStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {COLORS} from '../../constants/colors';

export default function CollectionCard({item}: any) {
  const [isFav, setIsFav] = useState<boolean>(false);
  return (
    <View style={styles.cardContainer}>
      <View style={styles.img}> </View>
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.para}>{item.description}</Text>
        <View style={styles.line} />
        <View style={styles.price}>
          <Text style={styles.oldPrice}>{item.price}</Text>
          <View style={styles.icons}>
            <TouchableOpacity onPress={() => setIsFav(!isFav)}>
              <Ionicons
                name={isFav ? 'heart-circle-outline' : 'heart-circle-sharp'}
                size={31.5}
                color={COLORS.primary}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo
                name="circle-with-plus"
                size={29}
                color={COLORS.primary}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
