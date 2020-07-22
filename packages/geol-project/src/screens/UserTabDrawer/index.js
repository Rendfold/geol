import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainStack from './MainStack';
import PaymentScreen from './MainStack/screens/PaymentScreen';
import CarStack from './CarStack';
import {View, TouchableOpacity, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function CustomTabBar({navigation, state, descriptors}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#EAEAEA',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const iconName = () => {
          if (route.name === 'MainStack') {
            return 'home';
          } else if (route.name === 'CarStack') {
            return 'car';
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center'}}>
            <Icon
              name={iconName()}
              size={30}
              color={isFocused ? '#8AD261' : 'black'}
            />
            <Text style={{color: isFocused ? '#8AD261' : 'black'}}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="MainStack"
      tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="MainStack"
        options={{tabBarLabel: 'Main'}}
        component={MainStack}
      />
      <Tab.Screen
        name="CarStack"
        options={{tabBarLabel: 'Transport'}}
        component={CarStack}
      />
    </Tab.Navigator>
  );
}

function DrawerTabNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Tabs">
      <Drawer.Screen name="Tabs" component={TabNavigator} />
      <Drawer.Screen name="payment" component={PaymentScreen}/>
    </Drawer.Navigator>
  );
}

export default DrawerTabNavigator;
