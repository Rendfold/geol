import * as React from 'react';
import {View, Text} from 'react-native';
import CardComponent from './CardComponent';

function MainScreen() {
  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingHorizontal: 16}}>
      <CardComponent />
      
    </View>
  );
}

export default MainScreen;
