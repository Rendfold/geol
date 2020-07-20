import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainStack from './MainStack';
import CarStack from './CarStack';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="MainStack">
      <Tab.Screen name="MainStack" component={MainStack} />
      <Tab.Screen name="CarStack" component={CarStack} />
    </Tab.Navigator>
  );
}

function DrawerTabNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Tabs">
      <Drawer.Screen name="Tabs" component={TabNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerTabNavigator;
