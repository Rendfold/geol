import * as React from 'react';
import {ScrollView} from 'react-native';
import CardComponent from './CardComponent';
import ScooterComponent from './ScooterComponent';

function MainScreen({navigation}) {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <CardComponent navigation={navigation} />
      <ScooterComponent navigation={navigation} />
    </ScrollView>
  );
}

export default MainScreen;
