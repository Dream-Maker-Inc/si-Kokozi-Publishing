import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {BeigeSecondColor, primaryColor} from '../../../../common/Colors'
import Notification from './Notification'
import {StatusBar} from 'react-native'
import Notice from './Notice'
import HeaderBackDark from '../../../../components/header/dark/HeaderBackDark'

const Tab = createMaterialTopTabNavigator()

const SettingsBlankTopTabs = () => <>
	<NavigationContainer>
		<HeaderBackDark title={'알림'}/>
		<Tab.Navigator
			screenOptions={{
				tabBarLabelStyle: {fontWeight: 'bold'},
				tabBarStyle: {backgroundColor: BeigeSecondColor},
				tabBarIndicatorStyle: {backgroundColor: primaryColor}
			}}>
			<Tab.Screen name="알림" component={Notification}/>
			<Tab.Screen name="공지사항" component={Notice}/>
		</Tab.Navigator>
		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</NavigationContainer>
</>

export default SettingsBlankTopTabs