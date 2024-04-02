import React, { memo } from "react";
import {Dimensions, Image, ImageBackground, Text, View} from 'react-native';
import Color from '../../assets/fonts/Color';
const {width} = Dimensions.get('window');
const ItemBanner = ({item}) => {
  return (
    <ImageBackground
      source={item.image}
      resizeMode={'cover'}
      style={{
        flex: 1,
        borderRadius: 20,
        margin: 10,
        overflow: 'hidden',
        padding: 10,
      }}
    />
  );
};

export default memo(ItemBanner);
