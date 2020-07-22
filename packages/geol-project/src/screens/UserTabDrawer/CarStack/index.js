import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CarSearchScreen, CarDetailScreen} from './screens';
// import {} from './screens/CarDetailScreen/index';

const Stack = createStackNavigator();

function CarStack() {
  return (
    <Stack.Navigator initialRouteName="CarSearchScreen">
      <Stack.Screen name="CarSearchScreen" component={CarSearchScreen} />

      <Stack.Screen
        name="carsScreen"
        component={CarDetailScreen}
        options={{
          title: 'Book Car',
        }}
      />
      <Stack.Screen name="bicycleScreen" component={CarSearchScreen} />
      <Stack.Screen name="electricScooter" component={CarSearchScreen} />
      {/* <Stack.Screen name="CarDetailScreen" component={CarDetailScreen} /> */}
    </Stack.Navigator>
  );
}

export default CarStack;
