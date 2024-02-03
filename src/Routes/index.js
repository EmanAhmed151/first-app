

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';
import CompletedScreen from '../Component/CompletedScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

const Navigation = () => (
  <NavigationContainer >
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen  name="Home"  component={HomeStack} />
      <Tab.Screen name="Completed" component={CompletedScreen} />
     
    </Tab.Navigator>
  </NavigationContainer>
);

export default Navigation;