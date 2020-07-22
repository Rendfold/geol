import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, Registration } from './screens';
import { Navigator } from 'react-native'


const Stack = createStackNavigator(
    //   {
    //   LoginScreen,
    //   Registration
    // }, {
    //   initialRouteName: 'Login'
    // }
);

function GuestStack() {
    return (
        <Stack.Navigator initialRouteName="Login" 
        >
            <Stack.Screen name="Login" component={LoginScreen}
            />
            <Stack.Screen name="Registration" component={Registration}
            />
        </Stack.Navigator>
    );
}

export default GuestStack;
