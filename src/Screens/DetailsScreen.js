

import React from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { title, description } = route.params.todo;

  return (
    <View>
      <Text style={{padding:50 ,color:'purple'}}>Title: {title}</Text>
      <Text style={{padding:50 ,color:'purple'}}>Description: {description}</Text>
    </View>
  );
};

export default DetailsScreen;