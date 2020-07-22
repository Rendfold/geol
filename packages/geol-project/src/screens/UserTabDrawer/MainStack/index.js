import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen, DetailScreen, PaymentScreen} from './screens';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
    </Stack.Navigator>
  );
}

export default MainStack;
