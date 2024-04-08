import React, {memo} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {IP_Address} from '../../utils/IP_Address';

const Header = ({title = '', toggleMenu}) => {
  const navigation = useNavigation();
  const userInfor = useSelector(state => state.user);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
      }}>
      <TouchableOpacity onPress={toggleMenu}>
        <Image
          source={require('../../assets/icons/menu.png')}
          style={{width: 30, height: 30}}
        />
      </TouchableOpacity>
      <Text>{title ?? ''}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('MyInformation')}>
        <Image
          source={
            userInfor.image
              ? {uri: IP_Address + userInfor.image}
              : require('../../assets/icons/profile-user.png')
          }
          style={{width: 30, height: 30, borderRadius: 40}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default memo(Header);
