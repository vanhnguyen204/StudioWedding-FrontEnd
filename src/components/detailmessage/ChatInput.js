import React, { memo, useRef } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Color from '../../assets/fonts/Color';

const ChatInput = props => {
  const {width} = Dimensions.get('window');
  const focusChat = useRef(null);
  return (
    <Pressable
      onPress={() => focusChat.current.focus()}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.9,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Color.white(),
        padding: 10,
        backgroundColor: 'transparent',
      }}>
      <TextInput
        ref={focusChat}
        value={props?.value}
        {...props}
        style={{
          borderRadius: 20,
          color: Color.black(),
        }}
      />
      <TouchableOpacity
        onPress={props?.sendChat}
        style={{
          opacity: props?.value ? 1 : 0,
          position: 'absolute',
          right: 10,
        }}>
        <Image
          style={{width: 20, height: 20}}
          source={require('../../assets/icons/send-message.png')}
        />
      </TouchableOpacity>
    </Pressable>
  );
};

export default memo(ChatInput);
