import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Color from '../assets/fonts/Color';

const {width, height} = Dimensions.get('window');
export default function Welcome({navigation}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const images = [
    require('../assets/images/welcome1.jpg'),
    require('../assets/images/welcome-2.jpg'),
    require('../assets/images/welcome3.jpg'),
  ];
  const pagination = () => {
    return (
      <Pagination
        activeDotIndex={activeSlide}
        inactiveDotOpacity={0.4}
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 15,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotScale={0.6}
        dotsLength={images.length}
      />
    );
  };
  return (
    <View style={{flex: 1}}>
      <Carousel

        onSnapToItem={index => setActiveSlide(index)}
        autoplay={true}
        containerCustomStyle={{overflow: 'visible'}}
        firstItem={1}
        itemWidth={width}
        sliderWidth={width}
        loop={true}
        itemHeight={height}
        inactiveSlideScale={0.75}
        inactiveSlideOpacity={0.75}
        data={images}
        activeAnimationType={'spring'}
        slideStyle={{display: 'flex', alignItems: 'center'}}
        renderItem={({item, index}) => {
          return (
            <View key={index}>
              <Image
                resizeMode={'cover'}
                style={{height: height, width: width}}
                source={item}
              />
            </View>
          );
        }}
      />
      {pagination()}

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={{
          position: 'absolute',
          bottom: 70,
          alignSelf: 'center',
          paddingVertical: 20,
          paddingHorizontal: 50,
          borderRadius: 20,
          backgroundColor: Color.white(),
        }}>
        <Text style={{fontWeight: '500'}}>Get started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
