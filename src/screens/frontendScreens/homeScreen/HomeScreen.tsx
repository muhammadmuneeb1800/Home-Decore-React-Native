import {View, Text} from 'react-native';
import TopBar from '../../../components/topBar/TopBar';
import {styles} from './homeScreenStyles';
import ImageFlatList from '../../../components/flatLists/imageFlatList/ImageFlatlist';
import CategoryFlatList from '../../../components/flatLists/categoryFlatList/CategoryFlatList';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TopBar mainText="Welcome" searchIcon="search1" />
      <View>
        <ImageFlatList />
      </View>
      <Text style={styles.Category}>Categories</Text>
      <View>
        <CategoryFlatList />
      </View>
    </View>
  );
}
