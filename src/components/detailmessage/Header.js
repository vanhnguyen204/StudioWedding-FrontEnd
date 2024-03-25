import React from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";

const Header = ({userName, onBack}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity onPress={onBack}>
        <Image
          source={require('../../assets/icons/arrow_left.png')}
          style={{width: 40, height: 40, marginRight: 20}}
        />
      </TouchableOpacity>
      <Image
        source={require('../../assets/icons/profile-user.png')}
        style={{width: 40, height: 40, marginRight: 10}}
      />
      <Text>{userName}</Text>
    </View>
  );
};

export default Header;
