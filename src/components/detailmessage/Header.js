import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {IP_Address} from '../../utils/IP_Address';

const Header = ({userName, onBack, imageUserReceive}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity onPress={onBack}>
        <Image
          source={require('../../assets/icons/arrow_left.png')}
          style={{width: 40, height: 40, marginRight: 20}}
        />
      </TouchableOpacity>
      <Image
        source={
          imageUserReceive
            ? {uri: IP_Address + imageUserReceive}
            : require('../../assets/icons/profile-user.png')
        }
        style={{width: 40, height: 40, marginRight: 10, borderRadius: 50}}
      />
      <Text>{userName}</Text>
    </View>
  );
};

export default Header;
