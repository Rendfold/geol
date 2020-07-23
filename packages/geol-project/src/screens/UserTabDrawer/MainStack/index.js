import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen, DetailScreen,DetailCarScreen, PaymentScreen, OrderList} from './screens';

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
        options={{title: 'How it works'}}
      />
      <Stack.Screen
        name="DetailCarScreen"
        component={DetailCarScreen}
        options={{title: 'How it works'}}
      />
      <Stack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{title: 'Payment'}}
      />
        <Stack.Screen
        name="OrderList"
        component={OrderList}
        options={{title: 'Order List'}}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
