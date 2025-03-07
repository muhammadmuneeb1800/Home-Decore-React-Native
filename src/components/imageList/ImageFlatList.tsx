import {View, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from './imageFlatListStyles';

interface ImageFlatlistProps {
  images: any[];
}

export default function ImageFlatlist({images}: ImageFlatlistProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View style={styles.main}>
      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <Image style={styles.img} source={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={({viewableItems}) => {
          if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index || 0);
          }
        }}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 50}}
      />

      <View style={styles.dots}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
}
