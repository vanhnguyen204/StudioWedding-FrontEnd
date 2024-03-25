import React, { memo } from "react";
import {Dimensions, Text, TouchableOpacity} from 'react-native';
import Color from '../../assets/fonts/Color';

const ButtonConfirm = ({name, onPress}) => {
  const {width} = Dimensions.get('window');
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 20,
        width: width * 0.8,
        backgroundColor: Color.brown(),
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 15,
      }}
      onPress={onPress}>
      <Text style={{color: Color.white()}}>{name}</Text>
    </TouchableOpacity>
  );
};

export default memo(ButtonConfirm);
