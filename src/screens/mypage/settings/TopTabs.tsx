import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {backgroundColor, primaryColor} from '../../../common/Colors'
import Notification from './Notification'
import {StatusBar} from 'react-native'
import HeaderBack from '../../../components/header/HeaderBack'
import Notice from './Notice'

const Tab = createMaterialTopTabNavigator()

const TopTabs = () => <>
	<NavigationContainer>
		<HeaderBack title={'알림'}/>
		<Tab.Navigator
			screenOptions={{
				tabBarLabelStyle: {fontWeight: 'bold'},
				tabBarStyle: {backgroundColor: backgroundColor},
				tabBarIndicatorStyle: {backgroundColor: primaryColor}
			}}>
			<Tab.Screen name="알림" component={Notification}/>
			<Tab.Screen name="공지사항" component={Notice}/>
		</Tab.Navigator>
		<StatusBar barStyle="dark-content" backgroundColor={backgroundColor}/>
	</NavigationContainer>
</>

export default TopTabs