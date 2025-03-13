import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {styles} from './homeStyles';
import TopBar from '../../components/topBar/TopBar';
import CategoryList from '../../components/categoryList/CategoryList';
import ImageList from '../../components/imageList/ImageList';
import {IMAGES, PRODUCTS} from '../../constants/constants';
import {useNavigation} from '@react-navigation/native';
import {navigationPropsStack} from '../../types/type';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../constants/colors';
import CollectionCard from '../../components/collectionCard/CollectionCard';
export default function Home() {
  const navigation = useNavigation<navigationPropsStack>();
  return (
    <ScrollView
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <TopBar
        mainText="Welcome"
        icon1="search1"
        IconOnpress1={() => navigation.navigate('search')}
      />
      <View>
        <ImageList images={IMAGES} />
      </View>
      <Text style={styles.Category}>Categories</Text>
      <View>
        <CategoryList />
      </View>
      <Text style={styles.best}>Best Seller</Text>
      <View style={styles.fullMain}>
        <View style={styles.bgSeller}>
          <Text style={styles.kit}> Kitchen Cart</Text>
          <Text style={styles.lorem}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Text>
          <View style={styles.mainBtn}>
            <View style={styles.subBtn}>
              <AntDesign name="star" size={20} color={COLORS.primary} />
              <Text style={styles.num}>4.5</Text>
            </View>
            <View style={styles.shop}>
              <Text style={styles.now}>Shop Now</Text>
            </View>
          </View>
        </View>
        <View style={styles.img}>
          <Image source={require('../../assets/images/seller.png')} />
        </View>
      </View>
      <Text style={styles.best}>New Collection</Text>
      <View style={styles.collection}>
        <FlatList
          data={PRODUCTS}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.flate}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <CollectionCard item={item} />}
        />
      </View>
    </ScrollView>
  );
}
