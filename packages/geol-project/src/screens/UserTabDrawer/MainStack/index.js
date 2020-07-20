import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from './screens';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
}

export default MainStack;
