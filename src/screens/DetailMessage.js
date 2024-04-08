import React, {useCallback, useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  Touchable,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ChatInput from '../components/detailmessage/ChatInput';
import {io} from 'socket.io-client';
import {useSelector} from 'react-redux';
import Header from '../components/detailmessage/Header';
import {IP_Address, IP_SocketIo} from '../utils/IP_Address';
import Color from '../assets/fonts/Color';
import axios from 'axios';
const socket = io(IP_SocketIo);
const DetailMessage = ({route, navigation}) => {
  const userName = useSelector(state => state.user.userName);
  const {fullNameUserReceiveChat, userNameReceive, imageUserReceive} =
    route.params;
  const {width} = Dimensions.get('window');
  const [chatValue, setChatValue] = useState('');
  const [chats, setChats] = useState([]);
  const handleSendChat = useCallback(() => {
    socket.emit('sendChat', {
      userSend: userName,
      userReceive: userNameReceive,
      message: chatValue,
    });
    setChatValue('');
  }, [chatValue, userName, userNameReceive]);

  const fetchChatBetweenUser = useCallback(() => {
    axios
      .post(IP_Address + '/api/messages/', {
        userSend: userName,
        userReceive: userNameReceive,
      })
      .then(res => {
        if (res.data) {
          setChats(res.data);
        }
      })
      .catch(e => {
        console.log(e);
      });
  }, [userName, userNameReceive]);
  useEffect(() => {
    socket.connect();
    const unsub = navigation.addListener('focus', () => {
      fetchChatBetweenUser();
    });
    const handleNewComment = chat => {
      setChats(prevComments => [...prevComments, chat]);
    };
    socket.on('newChat', handleNewComment);

    return () => {
      socket.off('newChat', handleNewComment);
      unsub();
    };
  }, [fetchChatBetweenUser, navigation]);

  return (
    <ImageBackground
      style={{flex: 1}}
      resizeMode={'cover'}
      source={require('../assets/images/bird_background2.jpg')}>
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          style={{flex: 1}}
          keyboardVerticalOffset={Platform.select({ios: 0, android: 500})}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{flex: 1}}>
              <Header
                onBack={() => navigation.goBack()}
                userName={fullNameUserReceiveChat}
                imageUserReceive={imageUserReceive}
              />
              <FlatList
                data={chats}
                renderItem={({item, index}) => {
                  console.log(item);
                  return (
                    <View style={{width: width, marginVertical: 30}}>
                      <View
                        style={{
                          position: 'absolute',
                          left: item.userReceive === userName ? 0 : undefined,
                          right: item.userSend === userName ? 0 : undefined,
                          flexDirection: 'row',
                          alignItems: 'center',

                          marginHorizontal: 10,
                        }}>
                        {item.userSend !== userName ? (
                          <Image
                            source={
                              imageUserReceive
                                ? {uri: IP_Address + imageUserReceive}
                                : require('../assets/icons/profile-user.png')
                            }
                            style={{width: 30, height: 30, borderRadius: 50}}
                          />
                        ) : null}

                        <Text
                          style={{
                            marginLeft: 10,
                            padding: 10,
                            backgroundColor: Color.white(),
                            borderRadius: 20,
                            overflow: 'hidden',
                          }}>
                          {item.message}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: width,
                }}>
                <ChatInput
                  sendChat={() => {
                    handleSendChat();
                  }}
                  value={chatValue}
                  onChangeText={setChatValue}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default DetailMessage;
