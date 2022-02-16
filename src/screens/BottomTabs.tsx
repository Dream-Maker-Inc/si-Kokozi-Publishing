import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import KokoziHouse from './kokozi-house/KokoziHouse'
import StoryTopTabs from './story/StoryTopTabs'
import MyPage from './mypage/MyPage'
import {primaryColor} from '../common/Colors'
import AttiTopTabs from './Atti/no-blank/TopTabs'

const Tab = createBottomTabNavigator()

export const BottomTabs = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="코코지 하우스"
				screenOptions={{
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
				}}>
				<Tab.Screen name="코코지 하우스" component={KokoziHouse}/>
				<Tab.Screen name="아띠" component={AttiTopTabs}/>
				<Tab.Screen name="이야기" component={StoryTopTabs}/>
				<Tab.Screen name="마이페이지" component={MyPage}/>
			</Tab.Navigator>
		</NavigationContainer>
	)
}

export default BottomTabs