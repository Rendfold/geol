import * as React from 'react';
import {View, Text} from 'react-native';
import CardComponent from './CardComponent';
import ScooterComponent from './ScooterComponent';
import { ScrollView } from 'react-native-gesture-handler';

function MainScreen() {
  return (
    <ScrollView style={{ backgroundColor: '#fff',}}>
      <CardComponent />
      <ScooterComponent />
    </ScrollView>
  );
}

export default MainScreen;
