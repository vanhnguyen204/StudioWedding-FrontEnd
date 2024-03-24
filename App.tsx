import 'react-native-gesture-handler';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
const Drawer = createDrawerNavigator();
const Home = () => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
