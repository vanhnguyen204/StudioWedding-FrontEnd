import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Color from '../../assets/fonts/Color';

const Search = props => {
  return (
    <View
      style={{
        borderRadius: 20,
        backgroundColor: Color.white(),
        paddingHorizontal: 10,
        paddingVertical: 15,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 10,
      }}>
      <Image
        source={require('../../assets/icons/search-studio.png')}
        style={{width: 20, height: 20, marginRight: 10}}
      />
      <TextInput {...props} style={{width: '90%'}} />
    </View>
  );
};

export default Search;
