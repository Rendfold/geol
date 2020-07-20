import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from './screens';

const Stack = createStackNavigator();

function GuestStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default GuestStack;
