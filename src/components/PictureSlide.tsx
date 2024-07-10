import React, { useRef, useState } from 'react';
import { View, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import bannerData from '../data/mock_banner_daa';
const { width , height} = Dimensions.get('window');

const PictureSlide = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ animated: true, index });
      setCurrentIndex(index);
    }
  };

  const renderItem = ({ item }) => (
    <Image source={{ uri: item.image }} style={styles.image} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={bannerData}
        horizontal
        pagingEnabled
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        scrollEventThrottle={16}
      />
      <View style={styles.buttonContainer}>
        {bannerData.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => scrollToIndex(index)}
            style={[
              styles.circleButton,
              { backgroundColor: currentIndex === index ? '#444' : '#CCCCCC' },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  image: {
    width: width-14,
    height: 170,
    borderRadius: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: height * 0.18
  },
  circleButton: {
    width: 6,
    height: 6,
    borderRadius: 6,
    marginHorizontal: 5,
  },
});

export default PictureSlide;
