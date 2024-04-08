import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {IP_Address} from '../../utils/IP_Address';
import axios from 'axios';
import {useSelector} from 'react-redux';
import Color from '../../assets/fonts/Color';

const ItemMessage = ({onDetailMessage, item}) => {
  const [conversation, setConversation] = useState();
  const userInfor = useSelector(state => state.user);
  const conversationLatest = useCallback(() => {
    axios
      .post(IP_Address + '/api/messages/latest-message', {
        userSend: userInfor.userName,
        userReceive: item.UserName,
      })
      .then(res => {
        if (res.data) {
          console.log(res.data);
          setConversation(res.data.message);
        }
      })
      .catch(e => {
        console.log(e);
      });
  }, [item.UserName, userInfor.userName]);
  useEffect(() => {
    conversationLatest();
  }, [conversationLatest]);
  return (
    <Pressable
      onPress={onDetailMessage}
      style={{flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
      <Image
        style={{width: 40, height: 40, marginRight: 10, borderRadius: 50}}
        source={
          item?.Image
            ? {uri: IP_Address + item.Image}
            : require('../../assets/icons/profile-user.png')
        }
      />
      <Pressable onPress={onDetailMessage}>
        <Text style={{marginBottom: 5}}>
          {item?.FullName || 'Người dùng chưa đặt tên'}
        </Text>
        <Text style={{color: Color.blue()}}>New message</Text>
      </Pressable>
    </Pressable>
  );
};

export default memo(ItemMessage);
