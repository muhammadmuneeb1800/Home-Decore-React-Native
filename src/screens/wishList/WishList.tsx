import {Text, View} from 'react-native';
import TopBar from '../../components/topBar/TopBar';
import {styles} from './wishListStyles';

export default function WishList() {
  return (
    <View style={styles.container}>
      <TopBar
        icon="arrowleft"
        text="Wishlist"
        icon1="delete"
        icon3="plus"
        icon2="circle-edit-outline"
        iconSize2={26}
      />
      <Text>Wish List</Text>
    </View>
  );
}
