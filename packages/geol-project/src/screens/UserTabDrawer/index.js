import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainStack from './MainStack';
import CarStack from './CarStack';
import {View, TouchableOpacity, Text} from 'react-native';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function CustomTabBar(props) {
  console.log(props);
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity style={{flex: 1}}>
        <Text>First</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flex: 1}}>
        <Text>Second</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flex: 1}}>
        <Text>Third</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flex: 1}}>
        <Text>Fourth</Text>
      </TouchableOpacity>
    </View>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="MainStack"
      tabBar={(props) => <CustomTabBar {...props} />}>
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
