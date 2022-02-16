import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {primaryColor} from '../common/Colors'

import KokoziHouse from './kokozi-house/KokoziHouse'
import StoryTopTabs from './story/StoryTopTabs'
import MyPage from './mypage/MyPage'
import AttiTopTabs from './Atti/no-blank/TopTabs'

const Tab = createBottomTabNavigator()

const tabScreenOptions = {
	tabBarStyle: {
		backgroundColor: '#FAEFE3',
		height: 70,
		paddingBottom: 10
	},
	tabBarLabelStyle: {
		color: primaryColor,
		fontSize: 14,
		fontWeight: 'bold'
	},
	tabBarActiveTintColor: primaryColor
}

export const BottomTabs = () => <>
	<NavigationContainer>
		<Tab.Navigator
			initialRouteName="코코지 하우스"
			screenOptions={tabScreenOptions}
		>
			<Tab.Screen name="코코지 하우스" component={KokoziHouse}/>
			<Tab.Screen name="아띠" component={AttiTopTabs}/>
			<Tab.Screen name="이야기" component={StoryTopTabs}/>
			<Tab.Screen name="마이페이지" component={MyPage}/>
		</Tab.Navigator>
	</NavigationContainer>
</>

export default BottomTabs