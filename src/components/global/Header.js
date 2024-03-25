import React, { memo } from "react";
import {Image, Text, TouchableOpacity, View} from 'react-native';

const Header = ({title, toggleMenu}) => {
  console.log('render home');
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
      <TouchableOpacity>
        <Image
          source={require('../../assets/icons/profile-user.png')}
          style={{width: 30, height: 30}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default memo(Header);
