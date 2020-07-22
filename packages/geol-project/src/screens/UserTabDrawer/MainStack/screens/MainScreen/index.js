import * as React from 'react';
import {View, Text} from 'react-native';
import CardComponent from './CardComponent';
import ScooterComponent from './ScooterComponent';
import { ScrollView } from 'react-native-gesture-handler';

function MainScreen({navigation}) {
  return (
    <ScrollView style={{ backgroundColor: '#fff',}}>
      <CardComponent navigation={navigation.navigate}/>
      <ScooterComponent />
    </ScrollView>
  );
}

export default MainScreen;
