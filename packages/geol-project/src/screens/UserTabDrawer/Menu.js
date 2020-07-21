import * as React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationActions, StackActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import { Image, Button, Icon } from '../index';
import { connect } from 'react-redux';
import { apiConstants } from 'dhp-mobile-configuration';
import { SidemenuOrderIcon } from 'dhp-mobile-components/src/Icons';
import { bindActionCreators } from 'redux';
import { logout } from 'dhp-mobile-app-state/src/actions/logout';
import { clearCart } from 'dhp-mobile-app-state/src/actions/cart';
import * as i18n from 'i18n-js';
import NavigatoinService from 'dhp-navigation-service/src';
import withStyle from './withStyle';
import { clearBobyMod } from 'dhp-mobile-app-state/src/actions/babyModeSwitch';
const dimen = Dimensions.get('window');
import Svg, { Path, Stop, Defs, LinearGradient } from 'react-native-svg';
@(withStyle as any)

@((connect as any)(
	state => {
		return {
			currentUser: state.currentUser.data,
			babyMode: state.babyMode.mode,
		};
	},
	dispatch => ({
		logout: bindActionCreators(logout, dispatch),
		clearBybyMod: bindActionCreators(clearBobyMod, dispatch),
		clearCart: bindActionCreators(clearCart, dispatch),
	})
))
class LoggedDrawer extends React.PureComponent<any, any> {
	navigateToScreen = route => {
		this.props.navigation.navigate(route);

		this.props.navigation.closeDrawer();
	};

	getDeviceHeight = () => {
		return dimen.height > 800;
	};


	renderDrawerMenu = (PROFILE_PICTURE) => {
		const { theme } = this.props;
		return (
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
		);
	};

	render() {
		const { currentUser } = this.props;
		const PROFILE_PICTURE = currentUser.customer ? currentUser.customer.uuid : '';
		return (
			<View style={{ flex: 1 }}>
				{dimen.height > 600 ? (
					this.renderDrawerMenu(PROFILE_PICTURE)
				) : (
						<ScrollView bounces={false}>{this.renderDrawerMenu(PROFILE_PICTURE)}</ScrollView>
					)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		flex: 1
	},
	block: {
		flex: 1
	},
	contentContainerStyle: {
		flexGrow: 1,
		justifyContent: 'space-between',
		paddingTop: 32,
		paddingHorizontal: 20,
		paddingBottom: 17
	},
	image: {
		backgroundColor: '#FF5433',
		width: 60,
		height: 60,
		borderRadius: 60,
		shadowColor: '#822812',
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,

		elevation: 3
	},
	drawerHeader: {
		minHeight: 148,
		height: 148,
		borderBottomLeftRadius: 148,
		borderBottomRightRadius: 148,
		backgroundColor: '#FF5433',
		transform: [{ scaleX: 1.8 }],
		overflow: 'hidden',
		justifyContent: 'center',
		zIndex: 1,
		position: 'relative'
	},
	drawerContent: {
		justifyContent: 'flex-start',
		paddingTop: 18,
		alignItems: 'center',
		flex: 1,
		marginLeft: 0,
		transform: [{ scaleX: 0.55 }]
	},
	drawerSvgContent: {
		justifyContent: 'flex-start',
		paddingTop: 17,
		alignItems: 'center',
		flex: 1,
		marginLeft: 5
	},
	navItemStyle: {
		width: 240,
		height: 30,
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 13
	},
	navTextStyle: {
		fontSize: 12,
		textAlign: 'left',
		height: 22,
		width: 220,
		marginBottom: 5,
		fontFamily: 'Open Sans'
	},
	navSectionStyle: {
		marginTop: 32,
		paddingHorizontal: 20,
		justifyContent: 'flex-start'
	},
	iconStyle: {
		fontSize: 18,
		color: '#FF5433'
	},
	photo: {
		width: 60,
		height: 60,
		borderRadius: 30,
		borderWidth: 5,
		borderColor: '#FFFFFF',
		backgroundColor: '#C9C9C9'
	},
	textStyle: {
		paddingLeft: 20,
		fontSize: 14,
		fontFamily: 'OpenSans-Semibold',
		paddingTop: 4
	}
});

export default LoggedDrawer;
