import React, {createContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTab from './BottomTab';
import WorkSchedule from '../screens/WorkSchedule';

const Drawer = createDrawerNavigator();
export const UserContext = createContext(null);
const DrawerNavigator = ({route}) => {
  const {userName} = route.params;
  return (
    <UserContext.Provider value={{userName}}>
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen name="BottomTab" component={BottomTab} />
        <Drawer.Screen name="WorkSchedule" component={WorkSchedule} />
      </Drawer.Navigator>
    </UserContext.Provider>
  );
};

export default DrawerNavigator;
