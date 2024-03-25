// InputLogin.js
import React, {memo, useCallback} from 'react';
import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Color from '../../assets/fonts/Color';

const InputLogin = memo(props => {
  const handlePress = useCallback(() => {
    if (props?.onClickFocus) {
      props.onClickFocus();
    }
  }, [props]);

  const handleToggleSecurePassword = useCallback(() => {
    if (props?.toggleSecurePassword) {
      props.toggleSecurePassword();
    }
  }, [props]);

  return (
    <View style={{marginTop: 10}}>
      <Text style={{color: Color.white()}}>{props?.label}</Text>
      <Pressable
        onPress={handlePress}
        style={{
          paddingVertical: 20,
          paddingHorizontal: 10,
          backgroundColor: Color.white(),
          borderRadius: 20,
          marginVertical: 5,
          flexDirection: 'row',
        }}>
        <TextInput {...props} ref={props?.isFocus} style={{width: '90%'}} />
        {props?.type === 'pass' && (
          <TouchableOpacity onPress={handleToggleSecurePassword}>
            <Image
              style={{height: 20, width: 20}}
              source={
                props?.isSecure
                  ? require('../../assets/icons/hidden.png')
                  : require('../../assets/icons/view.png')
              }
            />
          </TouchableOpacity>
        )}
      </Pressable>
      {props?.error && (
        <Text style={{color: Color.red(), marginLeft: 10}}>{props.error}</Text>
      )}
    </View>
  );
});

export default InputLogin;
