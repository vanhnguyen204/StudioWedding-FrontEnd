import React, {useCallback, useContext, useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/global/Header';
import Carousel from 'react-native-reanimated-carousel';
import ItemBanner from '../components/home/ItemBanner';
import {Pagination} from 'react-native-snap-carousel';
import Carousel2 from 'react-native-snap-carousel';

import Search from '../components/global/Search';
import axios from 'axios';
import {IP_Address} from '../utils/IP_Address';
import ItemServiceHot from '../components/service/ItemServiceHot';
import Screen from '../components/global/Screen';

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
  const [listServiceHot, setListServiceHot] = useState([]);
  const fetchServicesHot = () => {
    axios
      .get(IP_Address + '/api/services/hot/')
      .then(res => {
        if (res.data) {
          setListServiceHot(res.data);
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    const unsub = navigation.addListener('focus', () => {
      fetchServicesHot();
    });
    return () => {
      unsub();
    };
  }, [navigation]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header toggleMenu={onToggleMenu} />
      <ScrollView nestedScrollEnabled={true}>
        <Screen>
          <Carousel
            type="stack-horizontal-left"
            loop
            width={width}
            height={width / 1.5}
            autoPlay={true}
            data={banners}
            scrollAnimationDuration={3500}
            onSnapToItem={index => setActiveDot(index)}
            renderItem={({item, index}) => (
              <ItemBanner item={item} key={index} />
            )}
          />
          {/*{pagination()}*/}
          <Search
            placeholder={'Search...'}
            placeholderTextColor={'rgba(0,0,0,0.5)'}
          />
          {listServiceHot.length === 0 ? (
            <View>
              <Text style={{alignSelf: 'center'}}>Chưa có sản phẩm hot</Text>
            </View>
          ) : (
            <View style={{marginVertical: 15}}>
              <Text style={{marginLeft: 10, fontSize: 24}}>HOT</Text>
              <Carousel2
                containerCustomStyle={{overflow: 'visible', marginTop: 15}}
                firstItem={1}
                itemWidth={width * 0.65}
                sliderWidth={width}
                loop={false}
                inactiveSlideScale={0.75}
                inactiveSlideOpacity={0.75}
                data={listServiceHot}
                slideStyle={{display: 'flex', alignItems: 'center'}}
                renderItem={({item, index}) => {
                  return <ItemServiceHot count={item.count} item={item.data} />;
                }}
              />
            </View>
          )}
        </Screen>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
