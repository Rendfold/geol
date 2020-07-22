import * as React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function PaymentScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', paddingTop: 80 }}>
      <Icon name="credit-card" size={100} color="#6BA07F"/>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 30}}>
        <Icon name="clock-o" size={30}/>
      <Text style={{fontSize: 22, lineHeigt: 26, paddingLeft: 7}}>Coming Soon</Text>
      </View>
      <Text style={{fontSize: 20, lineHeigt: 26, paddingTop: 20}}>you will be able to pay with Credit Card.</Text>

    </View>
  );
}

export default PaymentScreen;
