import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {IP_Address} from '../../utils/IP_Address';

const ItemMessage = ({onDetailMessage, item}) => {
  console.log(item);
  return (
    <View
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
        <Text>Tin nhắn gần nhất </Text>
      </Pressable>
      <Text style={{position: 'absolute', right: 0}}>now</Text>
    </View>
  );
};

export default ItemMessage;
