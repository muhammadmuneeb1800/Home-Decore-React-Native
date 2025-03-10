import {View, Text, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './cartsStyles';
import TopBar from '../../components/topBar/TopBar';
import CartItem from '../../components/cartItem/CartItem';
import Button from '../../components/button/Button';

export default function Carts() {
  const [isData, setIsData] = useState<boolean>(true);
  return (
    <View style={styles.container}>
      <TopBar
        icon="arrowleft"
        text="My Cart"
        icon2="circle-edit-outline"
        iconSize2={26}
      />
      {!isData ? (
        <View style={styles.noData}>
          <Image source={require('../../assets/images/cart.png')} />
          <Text style={styles.noText}>There Are No Items In Your Cart</Text>
        </View>
      ) : (
        <>
          <ScrollView>
            <View style={styles.cartItem}>
              <View>
                <CartItem />
              </View>
              <View style={styles.total}>
                <View style={styles.line} />
                <View style={styles.flexText}>
                  <Text style={styles.sub}>Subtotal</Text>
                  <Text style={styles.dollor}>$980.00</Text>
                </View>
                <View style={styles.flexText}>
                  <Text style={styles.sub}>Tax and Fees</Text>
                  <Text style={styles.dollor}>$5.00</Text>
                </View>
                <View style={styles.flexText}>
                  <Text style={styles.sub}>Delivery</Text>
                  <Text style={styles.dollor}>$0.00</Text>
                </View>
                <View style={styles.line1} />
                <View style={styles.flexText}>
                  <Text style={styles.totalText}>Total</Text>
                  <Text style={styles.dollorText}>$985.00</Text>
                </View>
                <View style={styles.btn}>
                  <Button text="Check Out" />
                </View>
              </View>
            </View>
          </ScrollView>
        </>
      )}
    </View>
  );
}
