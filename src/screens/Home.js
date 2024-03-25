import React, {useCallback, useContext, useState} from 'react';
import {Dimensions, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import Header from '../components/global/Header';
import Carousel from 'react-native-reanimated-carousel';
import ItemBanner from '../components/home/ItemBanner';
import {Pagination} from 'react-native-snap-carousel';
import Search from '../components/global/Search';

const Home = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  const banners = [
    {
      image: require('../assets/images/banner-home2.png'),
    },
    {
      image: require('../assets/images/banner-home1.jpeg'),
    },
    {
      image: require('../assets/images/banner-home3.jpg'),
    },
    {
      image: require('../assets/images/banner-home4.jpg'),
    },
  ];
  const [activeDot, setActiveDot] = useState(0);
  const onToggleMenu = useCallback(() => {
    navigation.toggleDrawer();
  }, [navigation]);
  // const pagination = () => {
  //   return (
  //     <Pagination
  //       containerStyle={{marginTop: -40}}
  //       activeDotIndex={activeDot}
  //       inactiveDotOpacity={0.5}
  //       dotStyle={{
  //         width: 30,
  //         height: 10,
  //         borderRadius: 15,
  //         marginHorizontal: 8,
  //         backgroundColor: 'rgba(0, 0, 0, 0.92)',
  //       }}
  //       inactiveDotStyle={{width: 15}}
  //       inactiveDotScale={0.7}
  //       dotsLength={banners.length}
  //     />
  //   );
  // };
  return (
    <SafeAreaView>
      <Header toggleMenu={onToggleMenu} />
      <Carousel
        type="stack-horizontal-left"
        loop
        width={width}
        height={width / 1.5}
        autoPlay={true}
        data={banners}
        scrollAnimationDuration={3500}
        onSnapToItem={index => setActiveDot(index)}
        renderItem={({item, index}) => <ItemBanner item={item} key={index} />}
      />
      {/*{pagination()}*/}
      <Search
        placeholder={'Search...'}
        placeholderTextColor={'rgba(0,0,0,0.5)'}
      />
    </SafeAreaView>
  );
};

export default Home;
