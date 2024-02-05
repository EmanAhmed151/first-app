

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/Routes/tabNavigate';
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';

const App = () => {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
    </Provider>
  );
};

export default App;


