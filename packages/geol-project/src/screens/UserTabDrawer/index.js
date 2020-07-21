import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainStack from './MainStack';
import CarStack from './CarStack';
import {View, TouchableOpacity, Text} from 'react-native';
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

function DrawerMenu({navigation}) {
  <View style={{ flex: 1, overflow: 'hidden' }}>
				 <View>
					<Svg width="282" height="148.267" viewBox="0 0 282 148.267">
						<Defs>
							<LinearGradient id="a" x1="0%" x2="0%" y2="100%" gradientUnits="objectBoundingBox">
								<Stop offset="52%" stopColor="#8AD261" />
								<Stop offset="0.100%" stopColor="#8AD261" />
								<Stop offset="100%" stopColor="#8AD261" />
							</LinearGradient>
						</Defs>
						<Path fill="#FF5433" d="M0,0H282V123.157s-44.469,23.914-141,25.11c0,0-100.869-4.783-141-23.914Z" />
						<View style={{ alignItems: 'center' }}>

						</View>
					</Svg> 
					<View style={{ position: 'absolute', zIndex: 99999999, width: 282, height: 148 }}>
						<View style={styles.drawerSvgContent}>
							<TouchableOpacity activeOpacity={.9} onPress={() => this.navigateToScreen('ProfileScreen')} style={{ alignItems: 'center', position: 'relative', zIndex: 99999999999 }}>
								<View style={styles.image}>
									<Image
										source={apiConstants.api + '/en/api/user_profile/profile_picture?uuid=' + PROFILE_PICTURE + '&version=small'}
										style={{ width: 60, height: 60, borderRadius: 30, borderWidth: 3, borderColor: '#fff', backgroundColor: '#C9C9C9' }}
									/>
								</View>
								<View style={{ alignItems: 'center', paddingHorizontal: 16 }}>
									<Text numberOfLines={1} style={{ color: '#FFFFFF', marginTop: 13, fontSize: 18, fontFamily: 'OpenSans-Semibold', paddingVertical: 2, paddingLeft: 2 }}>
										{this.props.userData.customer ? this.props.userData.customer.first_name + ' ' + this.props.userData.customer.last_name + ' ' : null}
									</Text>
									<Text style={{ color: '#FFFFFF', marginTop: -5, fontSize: 12, fontFamily: 'Open Sans', textDecorationLine: 'underline', padding: 10 }}>
										{i18n.t('view_profile')}
									</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</View>
					
				<ScrollView contentContainerStyle={styles.contentContainerStyle}>
					<View>
						<TouchableOpacity onPress={() => this.navigateToScreen('PaymentScreen')} style={styles.navItemStyle}>
							<Icon name="icon-payments" style={styles.iconStyle} />
							<Text style={styles.textStyle}>{i18n.t('payments')} </Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => this.navigateToScreen('HowItWorksScreen')} style={styles.navItemStyle}>
							<Icon name="icon-question" style={styles.iconStyle} />
							<Text style={styles.textStyle}>{i18n.t('how_work_ekimo')} </Text>
						</TouchableOpacity>
					</View>
					<View>
						<View style={{ alignItems: 'flex-start', paddingRight: 20, paddingLeft: 7, paddingBottom: 17 }}>
							<TouchableOpacity onPress={() => this.navigateToScreen('LanguageScreen')}>
								<Text style={styles.navTextStyle}>{i18n.t('language')}</Text>
							</TouchableOpacity>
						</View>
						<View style={{ paddingLeft: 7, paddingRight: 0, }}>
							<Button
								style={{
									text: {
										fontSize: 14,
										textAlign: 'center',
										fontFamily: 'OpenSans-Semibold'
									},
									container: {
										height: 38,
										width: '100%'
									}
								}}
								onPress={ async () => {
									await AsyncStorage.removeItem('USER_TOKEN');
									this.props.navigation.navigate('LoginScreen', { biometric_modal: true });
									this.props.logout();
								}}
							>
								{i18n.t('sign_out')}
							</Button>
						</View>
					</View>
				</ScrollView>
			</View>
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
        options={{tabBarLabel: 'Cars'}}
        component={CarStack}
      />
    </Tab.Navigator>
  );
}

function DrawerTabNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Tabs">
      <Drawer.Screen name="Tabs" component={TabNavigator} />
      <Drawer.Screen name="menu" component={DrawerMenu} />
    </Drawer.Navigator>
  );
}

export default DrawerTabNavigator;
