import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigator/StackNavigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {View} from 'react-native';
import ModalLoading from "./src/components/global/ModalLoading";

const App = () => {
  return (
    <Provider store={store}>
      <ModalLoading isVisible={false} />
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
      <View />
    </Provider>
  );
};

export default App;
