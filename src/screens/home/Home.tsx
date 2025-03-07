import {View, Text} from 'react-native';
import TopBar from '../../../components/topBar/TopBar';
import {styles} from './homeScreenStyles';
import CategoryFlatList from '../../../components/flatLists/categoryFlatList/CategoryFlatList';
import ImageFlatlist from '../../../components/flatLists/imageFlatList/ImageFlatList';
import {images} from '../../../constants/constants';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TopBar mainText="Welcome" searchIcon="search1" />
      <View>
        <ImageFlatlist images={images} />
      </View>
      <Text style={styles.Category}>Categories</Text>
      <View>
        <CategoryFlatList />
      </View>
      <Text style={styles.best}>Best Seller</Text>
    </View>
  );
}
