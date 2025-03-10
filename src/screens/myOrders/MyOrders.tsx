import {View} from 'react-native';
import TopBar from '../../components/topBar/TopBar';
import {styles} from './myOrdersStyles';
import OrderCard from '../../components/orderCard/OrderCard';

export default function MyOrders() {
  return (
    <View style={styles.container}>
      <TopBar icon="arrowleft" text="My Orders" />
      <View style={styles.list}>
        <OrderCard />
      </View>
    </View>
  );
}
