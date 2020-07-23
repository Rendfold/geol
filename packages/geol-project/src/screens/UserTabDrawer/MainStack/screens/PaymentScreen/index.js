import * as React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function PaymentScreen() {
  return (
    <View style={{ flex: 1, }}>
      <View style={{ marginTop: 50, height: 40, alignItems: 'center', width: '100%', borderBottomColor: '#D5D5D5', borderBottomWidth: 1 }}>
        <Text style={{ fontSize: 16 }}>Payment</Text>
      </View>
      <View style={{ paddingTop: 40, alignItems: 'center', }}>
        <Icon name="credit-card" size={100} color="#6BA07F" />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 30 }}>
          <Icon name="clock-o" size={30} />
          <Text style={{ fontSize: 22, lineHeigt: 26, paddingLeft: 7 }}>Coming Soon</Text>
        </View>
        <Text style={{ fontSize: 20, lineHeigt: 26, paddingTop: 20 }}>you will be able to pay with Credit Card.</Text>
      </View>
    </View>
  );
}

export default PaymentScreen;
