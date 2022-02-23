import React from 'react'
import Notice from './Notice'
import Notification from './Notification'
import {NavigationContainer} from '@react-navigation/native'
import {BeigeSecondColor, primaryColor} from '../../../../common/Colors'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import CustomHeader from '../../../../components/global/header/CustomHeader'

const Tab = createMaterialTopTabNavigator()

const TabOptions = {
	tabBarLabelStyle: {fontWeight: 'bold'},
	tabBarStyle: {backgroundColor: BeigeSecondColor},
	tabBarIndicatorStyle: {backgroundColor: primaryColor}
}

const SettingsTopTabs = () => <>
	<NavigationContainer>
		<CustomHeader statusBarColor="dark" left="back" title="알림"/>
		<Tab.Navigator screenOptions={TabOptions}>
			<Tab.Screen name="알림" component={Notification}/>
			<Tab.Screen name="공지사항" component={Notice}/>
		</Tab.Navigator>
	</NavigationContainer>
</>

export default SettingsTopTabs