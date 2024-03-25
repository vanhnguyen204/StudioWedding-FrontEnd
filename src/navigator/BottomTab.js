import React, {createContext, useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import WorkSchedule from '../screens/WorkSchedule';
import Service from '../screens/Service';
import Message from '../screens/Message';
import IconBottomTab from '../components/global/IconBottomTab';
import {Platform} from 'react-native';
import {UserContext} from './DrawerNavigator';

const Tab = createBottomTabNavigator();
const iconHome = require('../assets/icons/home.png');
const iconWork = require('../assets/icons/work.png');
const iconService = require('../assets/icons/service.png');
const iconMessage = require('../assets/icons/message.png');

const BottomTab = () => {
  const {userName} = useContext(UserContext);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            marginHorizontal: 20,
            borderRadius: 20,
            paddingBottom: 0,
            height: 60,
            marginBottom: Platform.OS === 'ios' ? 25 : 15,
          },
        ],
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => {
            return (
              <IconBottomTab size={size} color={color} require={iconHome} />
            );
          },
        }}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => {
            return (
              <IconBottomTab size={size} color={color} require={iconMessage} />
            );
          },
        }}
        name="Message"
        component={Message}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => {
            return (
              <IconBottomTab size={size} color={color} require={iconService} />
            );
          },
        }}
        name="Service"
        component={Service}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => {
            return (
              <IconBottomTab size={size} color={color} require={iconWork} />
            );
          },
        }}
        name="Work"
        component={WorkSchedule}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
