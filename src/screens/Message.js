import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import Header from '../components/message/Header';
import Search from '../components/global/Search';
import ItemMessage from '../components/message/ItemMessage';
import axios from 'axios';
import {IP_Address} from '../utils/IP_Address';
import {useSelector} from 'react-redux';

const Message = ({navigation}) => {
  const userName = useSelector(state => state.user.userName);

  const [listStaff, setListStaff] = useState([]);
  const fetchListStaff = () => {
    axios
      .post(IP_Address + '/api/staffs/', {
        userName,
      })
      .then(res => {
        if (res.data) {
          setListStaff(res.data);
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    fetchListStaff();
  }, []);
  return (
    <SafeAreaView>
      <View style={{padding: 10}}>
        <Header />
        <Search
          placeholder={'Find your person do you need!'}
          placeholderTextColor={'rgba(0,0,0,0.5)'}
        />
        <FlatList
          data={listStaff}
          renderItem={({item, index}) => {
            return (
              <ItemMessage
                item={item}
                onDetailMessage={() =>
                  navigation.navigate('DetailMessage', {
                    fullNameUserReceiveChat:
                      item?.FullName || 'Người dùng chưa đặt tên',
                    userNameReceive: item.UserName,
                  })
                }
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Message;
