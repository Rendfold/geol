import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CarSearchScreen, CarDetailScreen, CarScreen} from './screens';
import BicycleDetailScreen from './screens/BicycleDetailScreen/index';
import ElecticScooterDetailScreen from './screens/ElecticScooterDetail/index';
// import {} from './screens/CarDetailScreen/index';

const Stack = createStackNavigator();

function CarStack() {
  return (
    <Stack.Navigator initialRouteName="CarSearchScreen">
      <Stack.Screen name="CarSearchScreen" component={CarSearchScreen} />
      <Stack.Screen
        name="CarScreen"
        component={CarScreen}
        options={{
          title: 'Car Info',
        }}
      />
      <Stack.Screen
        name="carsScreen"
        component={CarDetailScreen}
        options={{
          title: 'Book Car',
        }}
      />
      <Stack.Screen name="bicycleScreen" component={BicycleDetailScreen} />
      <Stack.Screen
        name="electricScooter"
        component={ElecticScooterDetailScreen}
      />
      {/* <Stack.Screen name="CarDetailScreen" component={CarDetailScreen} /> */}
    </Stack.Navigator>
  );
}

export default CarStack;
