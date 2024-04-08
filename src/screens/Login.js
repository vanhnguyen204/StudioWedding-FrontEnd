// Login.js
import React, {useRef, useState, useCallback} from 'react';
import {
  Alert,
  Dimensions,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Color from '../assets/fonts/Color';
import InputLogin from '../components/login/InputLogin';
import ButtonConfirm from '../components/login/ButtonConfirm';
import {useDispatch} from 'react-redux';
import {setUser, setUserData, setUserField} from '../redux/userAction';
import axios from 'axios';
import {IP_Address, localhost} from '../utils/IP_Address';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const {height} = Dimensions.get('window');
  const [isSecure, setIsSecure] = useState(true);
  const inputUser = useRef(null);
  const inputPass = useRef(null);
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');

  const toggleSecurePassword = useCallback(() => {
    setIsSecure(prevState => !prevState);
  }, []);

  const checkLogin = () => {
    if (!userName) {
      Alert.alert('Thông báo', 'Không được để trống tài khoản!');
    } else if (!passWord) {
      Alert.alert('Thông báo', 'Không được để trống mật khẩu!');
    } else {
      axios
        .post(IP_Address + '/api/auth/login', {
          UserName: userName,
          Password: passWord,
        })
        .then(res => {
          if (res.data.error) {
            Alert.alert('Thông báo', res.data.error);
          } else {
            const {
              _id,
              UserName,
              FullName,
              Image,
              Role,
              PhoneNumber,
              Address,
              Email,
            } = res.data.user;
            dispatch(
              setUserData({
                userName: UserName,
                fullName: FullName,
                image: Image,
                role: Role,
                address: Address,
                phoneNumber: PhoneNumber,
                email: Email,
                _id: _id,
              }),
            );
            setUserName('');
            setPassWord('');
            navigation.navigate('Drawer', {userName: userName});
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : height}
      style={{flex: 1}}
      keyboardVerticalOffset={Platform.select({ios: 0, android: height})}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          style={{flex: 1, justifyContent: 'center', padding: 20}}
          source={require('../assets/images/login-background.jpg')}>
          <Text style={{fontSize: 40, color: Color.white()}}>Login</Text>
          <InputLogin
            value={userName}
            onChangeText={text => setUserName(text)}
            onClickFocus={() => inputUser.current.focus()}
            isFocus={inputUser}
            label={'User name'}
            error={''}
            placeholderTextColor={Color.black()}
            placeholder={'User name'}
          />
          <InputLogin
            value={passWord}
            onChangeText={setPassWord}
            onClickFocus={() => inputPass.current.focus()}
            isFocus={inputPass}
            secureTextEntry={isSecure}
            label={'Password'}
            error={''}
            type={'pass'}
            isSecure={isSecure}
            placeholderTextColor={Color.black()}
            placeholder={'Password'}
            toggleSecurePassword={toggleSecurePassword}
          />
          <View style={{alignSelf: 'flex-end', marginVertical: 5}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={{color: Color.white()}}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <ButtonConfirm name={'Confirm'} onPress={checkLogin} />
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
