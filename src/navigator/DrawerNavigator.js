import React, {createContext, useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTab from './BottomTab';
import WorkSchedule from '../screens/WorkSchedule';
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import StaffList from '../screens/manage/staff/StaffList';
import Color from '../assets/fonts/Color';
import ServiceList from '../screens/manage/service/ServiceList';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {IP_Address} from '../utils/IP_Address';

const Drawer = createDrawerNavigator();
export const UserContext = createContext(null);
const DrawerNavigator = ({route, navigation}) => {
  const userInforStore = useSelector(state => state.user);
  // console.log('user infor');
  // console.log(userInforStore);
  const {width, height} = Dimensions.get('window');
  const CustomDrawerContent = ({navigation}) => {
    return (
      <SafeAreaView
        style={{flex: 1, paddingTop: 20, backgroundColor: Color.blue()}}>
        <View style={{flex: 1, marginTop: height * 0.1}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MyInformation');
              navigation.closeDrawer();
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <Image
              source={
                userInforStore.image
                  ? {uri: IP_Address + userInforStore.image}
                  : require('../assets/icons/profile-user.png')
              }
              style={{height: 40, width: 40, marginRight: 10, borderRadius: 50}}
            />
            <Text style={{fontSize: 16, color: Color.white()}}>
              {userInforStore?.fullName || 'Người dùng chưa đặt tên'}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              height: 1,
              width: '100%',
              marginVertical: 10,
              backgroundColor: Color.black(),
            }}
          />

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
              marginBottom: 10,
            }}
            onPress={() => {
              navigation.navigate('ServiceManage');
              navigation.closeDrawer();
            }}>
            <Image
              source={require('../assets/icons/24-7-support.png')}
              style={{
                height: 30,
                width: 30,
                marginRight: 10,
                tintColor: Color.white(),
              }}
            />
            <Text style={{fontSize: 16, color: Color.white()}}>
              Quản lý dịch vụ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
            }}
            onPress={() => {
              navigation.navigate('Staff');
              navigation.closeDrawer();
            }}>
            <Image
              source={require('../assets/icons/group-staff.png')}
              style={{
                height: 35,
                width: 30,
                marginRight: 10,
                tintColor: Color.white(),
              }}
            />
            <Text style={{fontSize: 16, color: Color.white()}}>
              Nhân viên của bạn
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
              marginTop: 5,
            }}
            onPress={() => {
              navigation.navigate('ManageWork');
              navigation.closeDrawer();
            }}>
            <Image
              source={require('../assets/icons/work.png')}
              style={{
                height: 30,
                width: 30,
                marginRight: 10,
                tintColor: Color.white(),
              }}
            />
            <Text style={{fontSize: 16, color: Color.white()}}>
              Quản lý công việc
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
              marginTop: 5,
            }}
            onPress={() => {
              navigation.navigate('Invoice');
              navigation.closeDrawer();
            }}>
            <Image
              source={require('../assets/icons/invoice.png')}
              style={{
                height: 30,
                width: 30,
                marginRight: 10,
                tintColor: Color.white(),
              }}
            />
            <Text style={{fontSize: 16, color: Color.white()}}>Hoá đơn</Text>
          </TouchableOpacity>
          {/*<TouchableOpacity*/}
          {/*  style={{*/}
          {/*    flexDirection: 'row',*/}
          {/*    alignItems: 'center',*/}
          {/*    marginLeft: 10,*/}
          {/*    marginTop: 5,*/}
          {/*  }}*/}
          {/*  onPress={() => {*/}
          {/*    navigation.navigate('Statistical');*/}
          {/*    navigation.closeDrawer();*/}
          {/*  }}>*/}
          {/*  <Image*/}
          {/*    source={require('../assets/icons/chart.png')}*/}
          {/*    style={{*/}
          {/*      height: 30,*/}
          {/*      width: 30,*/}
          {/*      marginRight: 10,*/}
          {/*      tintColor: Color.white(),*/}
          {/*    }}*/}
          {/*  />*/}
          {/*  <Text style={{fontSize: 16, color: Color.white()}}>Thống kê</Text>*/}
          {/*</TouchableOpacity>*/}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
              marginTop: 10,
            }}
            onPress={() => navigation.navigate('Login')}>
            <Image
              source={require('../assets/icons/logout.png')}
              style={{
                height: 30,
                width: 30,
                marginRight: 10,
                tintColor: Color.white(),
              }}
            />
            <Text style={{fontSize: 16, color: Color.white()}}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  const CustomDrawerUser = ({navigation}) => {
    return (
      <SafeAreaView
        style={{flex: 1, paddingTop: 20, backgroundColor: Color.blue()}}>
        <View style={{flex: 1, marginTop: height * 0.1}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('MyInformation');
              navigation.closeDrawer();
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <Image
              source={
                userInforStore.image
                  ? {uri: IP_Address + userInforStore.image}
                  : require('../assets/icons/profile-user.png')
              }
              style={{height: 40, width: 40, marginRight: 10, borderRadius: 50}}
            />
            <Text style={{fontSize: 16, color: Color.white()}}>
              {userInforStore?.fullName || 'Người dùng chưa đặt tên'}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              height: 1,
              width: '100%',
              marginVertical: 10,
              backgroundColor: Color.black(),
            }}
          />
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
              marginTop: 5,
            }}
            onPress={() => {
              navigation.navigate('Invoice');
              navigation.closeDrawer();
            }}>
            <Image
              source={require('../assets/icons/invoice.png')}
              style={{
                height: 30,
                width: 30,
                marginRight: 10,
                tintColor: Color.white(),
              }}
            />
            <Text style={{fontSize: 16, color: Color.white()}}>Hoá đơn</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
              marginTop: 10,
            }}
            onPress={() => navigation.navigate('Login')}>
            <Image
              source={require('../assets/icons/logout.png')}
              style={{
                height: 30,
                width: 30,
                marginRight: 10,
                tintColor: Color.white(),
              }}
            />
            <Text style={{fontSize: 16, color: Color.white()}}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  return (
    <Drawer.Navigator
      drawerContent={props =>
        userInforStore.role === 'admin' ? (
          <CustomDrawerContent {...props} />
        ) : (
          <CustomDrawerUser {...props} />
        )
      }
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="BottomTab" component={BottomTab} />
      <Drawer.Screen name="WorkSchedule" component={WorkSchedule} />
      <Drawer.Screen name="Staff" component={StaffList} />
      <Drawer.Screen name="ServiceManage" component={ServiceList} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
