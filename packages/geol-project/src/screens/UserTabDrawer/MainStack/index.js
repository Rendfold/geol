import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen, DetailScreen, PaymentScreen} from './screens';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{title: 'Main'}}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{title: 'Car Details'}}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{title: 'Payment'}}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
