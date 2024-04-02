import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import Home from '../screens/Home';
import DrawerNavigator from './DrawerNavigator';
import BottomTab from './BottomTab';
import DetailMessage from '../screens/DetailMessage';
import ServiceHandle from '../screens/manage/service/ServiceHandle';
import DetailService from '../screens/public/DetailService';
import ListWorkSchedule from '../screens/manage/work/ListWorkSchedule';
import DetailWork from '../screens/manage/work/DetailWork';
import {MyInformation} from '../screens/MyInformation';
import Ordering from '../screens/Ordering';
import Invoice from '../screens/Invoice';
import InvoiceDetail from '../screens/InvoiceDetail';

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
      <Stack.Screen
        options={{headerShown: false}}
        name="ServiceHandle"
        component={ServiceHandle}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="DetailService"
        component={DetailService}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ManageWork"
        component={ListWorkSchedule}
      />
      <Stack.Screen
        name="DetailWork"
        component={DetailWork}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyInformation"
        component={MyInformation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Ordering"
        component={Ordering}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Invoice"
        component={Invoice}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InvoiceDetail"
        component={InvoiceDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
