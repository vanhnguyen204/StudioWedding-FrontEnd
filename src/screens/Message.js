import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import Header from '../components/message/Header';
import Search from '../components/global/Search';
import ItemMessage from '../components/message/ItemMessage';
import axios from 'axios';
import {IP_Address} from '../utils/IP_Address';
import {useSelector} from 'react-redux';
import ModalCreateConversation from '../components/message/ModalCreateConversation';

const Message = ({navigation}) => {
  const [showModalCreateConversation, setShowModalCreateConversation] =
    useState(false);
  const userName = useSelector(state => state.user.userName);
  const toggleModalConversation = () => {
    setShowModalCreateConversation(prevState => !prevState);
  };
  const [listStaff, setListStaff] = useState([]);
  const fetchListStaff = useCallback(() => {
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
  }, [userName]);
  useEffect(() => {
    const unsub = navigation.addListener('focus', () => {
      fetchListStaff();
    });
    return () => {
      unsub();
    };
  }, [fetchListStaff, navigation]);
  const search = value => {
    if (value) {
      const filter = listStaff.filter(item => {
        console.log(item);
        return value.toLowerCase().includes(item.FullName.toLowerCase());
      });
      setListStaff(filter);
    } else {
      fetchListStaff();
    }
  };
  return (
    <SafeAreaView>
      <View style={{padding: 10}}>
        <ModalCreateConversation
          isVisible={showModalCreateConversation}
          closeModal={toggleModalConversation}
        />
        <Header onPress={() => toggleModalConversation()} />
        {/*<Search*/}
        {/*  onChangeText={search}*/}
        {/*  placeholder={'Find your person do you need!'}*/}
        {/*  placeholderTextColor={'rgba(0,0,0,0.5)'}*/}
        {/*/>*/}
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
                    imageUserReceive: item.Image,
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
