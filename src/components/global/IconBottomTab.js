import React from 'react';
import {Image} from 'react-native';

const IconBottomTab = ({size, color, require}) => {
  return (
    <Image
      style={{height: size, width: size}}
      tintColor={color}
      source={require}
    />
  );
};

export default IconBottomTab;
