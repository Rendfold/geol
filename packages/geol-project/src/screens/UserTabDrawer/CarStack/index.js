import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CarSearchScreen} from './screens';

const Stack = createStackNavigator();

function CarStack() {
  return (
    <Stack.Navigator initialRouteName="CarSearchScreen">
      <Stack.Screen name="CarSearchScreen" component={CarSearchScreen} />

      <Stack.Screen name="carsScreen" component={CarSearchScreen} />
      <Stack.Screen name="bicycleScreen" component={CarSearchScreen} />
      <Stack.Screen name="electricScooter" component={CarSearchScreen} />
    </Stack.Navigator>
  );
}

export default CarStack;
