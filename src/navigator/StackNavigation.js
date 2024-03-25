import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Home from '../screens/Home';
import DrawerNavigator from './DrawerNavigator';
import BottomTab from './BottomTab';
import DetailMessage from '../screens/DetailMessage';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="DetailMessage"
        component={DetailMessage}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
