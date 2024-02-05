import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';


const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="HomeScreen" component={HomeScreen}  />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="completed" component={CompletedTodosScreen} />

    </Stack.Navigator>
  );
};

export default HomeStack;