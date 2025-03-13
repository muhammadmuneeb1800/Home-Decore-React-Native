import {FlatList, Text, View} from 'react-native';
import React from 'react';
import TopBar from '../../components/topBar/TopBar';
import {styles} from './searchStyles';
import Input from '../../components/input/Input';
import TopSearch from '../../components/topSearch/TopSearch';
import {TOP_SEARCH} from '../../constants/constants';

export default function Search() {
  return (
    <View style={styles.container}>
      <TopBar icon="arrowleft" text="Search" />
      <View style={styles.search}>
        <Input placeholder="Search" />
      </View>
      <View>
        <Text style={styles.top}>Top Searches</Text>
        <View style={styles.list}>
          <FlatList
            data={TOP_SEARCH}
            renderItem={({item}) => <TopSearch item={item} />}
          />
        </View>
      </View>
    </View>
  );
}
