import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text style={{fontSize: 40}}>Message</Text>
      <TouchableOpacity>
        <Image
          source={require('../../assets/icons/plus.png')}
          style={{height: 30, width: 30}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
