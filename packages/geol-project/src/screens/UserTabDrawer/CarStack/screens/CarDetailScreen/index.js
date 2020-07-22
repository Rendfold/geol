import * as React from 'react';
import {
  View,
  Text,
  Button,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {isEmpty} from 'lodash';
import {DatePicker} from './DatePicker';

function CarDetailScreen() {
  return (
    <ScrollView style={{backgroundColor: '#fff', flex: 1}}>
      {/* <ImageBackground source={Geol} style={{ width: '100%', height: 300 }} /> */}
      <View style={{paddingHorizontal: 16}}>
        <DatePicker />
      </View>
    </ScrollView>
  );
}

export default CarDetailScreen;
