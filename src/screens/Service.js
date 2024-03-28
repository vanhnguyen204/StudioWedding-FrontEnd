import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Screen from '../components/global/Screen';
import Header from '../components/global/Header';
import Search from '../components/global/Search';
import Color from '../assets/fonts/Color';
import axios from 'axios';
import {IP_Address} from '../utils/IP_Address';
import {useDispatch, useSelector} from 'react-redux';
import ServiceActionStaff from '../redux/service/serviceActionStaff';
import ListService from '../components/service/ListService';

const Service = ({navigation}) => {
  const dispatch = useDispatch();
  const serviceStaff = useSelector(state => state.serviceForStaff);
  const fetchCarServices = () => {
    axios
      .get(IP_Address + '/api/services/cars')
      .then(res => {
        if (res.data) {
          dispatch(ServiceActionStaff.setField('cars', res.data.data));
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
  const fetchAccessoryServices = () => {
    axios
      .get(IP_Address + '/api/services/accessories')
      .then(res => {
        if (res.data) {
          dispatch(ServiceActionStaff.setField('accessories', res.data.data));
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  const fetchRestaurantServices = () => {
    axios
      .get(IP_Address + '/api/services/restaurants')
      .then(res => {
        if (res.data) {
          dispatch(ServiceActionStaff.setField('restaurants', res.data.data));
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
  const fetchPresentServices = () => {
    axios
      .get(IP_Address + '/api/services/presents')
      .then(res => {
        if (res.data) {
          dispatch(ServiceActionStaff.setField('presents', res.data.data));
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    const unsub = navigation.addListener('focus', () => {
      fetchCarServices();
      fetchAccessoryServices();
      fetchRestaurantServices();
      fetchPresentServices();
    });
    return () => {
      unsub();
    };
  }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header toggleMenu={() => navigation.toggleDrawer()} />
      <Search placeholder={'Search...'} placeholderTextColor={Color.gray()} />
      <ScrollView nestedScrollEnabled={true}>
        <Screen>
          <ListService title={'Xe hoa'} data={serviceStaff.cars} />
          <ListService title={'Trang phục'} data={serviceStaff.accessories} />
          <ListService title={'Cháp cưới'} data={serviceStaff.presents} />
          <ListService
            title={'Trung tâm sự kiện & nhà hàng'}
            data={serviceStaff.restaurants}
          />
        </Screen>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Service;
