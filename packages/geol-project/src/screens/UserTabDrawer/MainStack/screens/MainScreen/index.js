import * as React from 'react';
import {View, Text} from 'react-native';
import CardComponent from './CardComponent';

function MainScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Main Screen</Text>
      <CardComponent />
    </View>
  );
}

export default MainScreen;
