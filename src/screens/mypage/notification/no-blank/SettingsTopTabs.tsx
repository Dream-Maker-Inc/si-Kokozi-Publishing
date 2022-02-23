import React from 'react'
import Notice from './Notice'
import {StatusBar} from 'react-native'
import Notification from './Notification'
import {NavigationContainer} from '@react-navigation/native'
import {BeigeSecondColor, primaryColor} from '../../../../common/Colors'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import HeaderBackDark from '../../../../components/global/header/dark/HeaderBackDark'

const Tab = createMaterialTopTabNavigator()

const TabOptions = {
	tabBarLabelStyle: {fontWeight: 'bold'},
	tabBarStyle: {backgroundColor: BeigeSecondColor},
	tabBarIndicatorStyle: {backgroundColor: primaryColor}
}

const SettingsTopTabs = () => <>
	<NavigationContainer>
		<HeaderBackDark title={'알림'}/>
		<Tab.Navigator screenOptions={TabOptions}>
			<Tab.Screen name="알림" component={Notification}/>
			<Tab.Screen name="공지사항" component={Notice}/>
		</Tab.Navigator>
		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</NavigationContainer>
</>

export default SettingsTopTabs