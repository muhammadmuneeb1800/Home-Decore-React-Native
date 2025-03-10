import {View, Text} from 'react-native';
import {styles} from './homeStyles';
import TopBar from '../../components/topBar/TopBar';
import CategoryList from '../../components/categoryList/CategoryList';
import ImageList from '../../components/imageList/ImageList';
import {IMAGES} from '../../constants/constants';
import {useNavigation} from '@react-navigation/native';
import {navigationPropsStack} from '../../types/type';
export default function Home() {
  const navigation = useNavigation<navigationPropsStack>();
  return (
    <View style={styles.container}>
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
    </View>
  );
}
