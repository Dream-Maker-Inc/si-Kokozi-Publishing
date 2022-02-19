import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {BeigeSecondColor, primaryColor} from '../common/Colors'

import KokoziHouse from './kokozi-house/KokoziHouse'
import StoryTopTabs from './story/StoryTopTabs'
import MyPage from './mypage/MyPage'
import AttiTopTabs from './Atti/no-blank/TopTabs'
import {Image} from 'react-native'
import styled from '@emotion/native'

const Tab = createBottomTabNavigator()

const TabIconImage = styled.Image`
  width: 30px;
`

const TabBarIconOptions = (route, focused) => {
	switch (route.name) {
	case '코코지 하우스':
		if (focused) {
			return <TabIconImage
				resizeMode="contain"
				source={require('../../assets/tab/icons/kokozi-active.png')}
			/>
		} else {
			return <TabIconImage
				resizeMode="contain"
				source={require('../../assets/tab/icons/kokozi.png')}
			/>
		}
	case '아띠':
		if (focused) {
			return <TabIconImage
				resizeMode="contain"
				source={require('../../assets/tab/icons/atti-active.png')}
			/>
		} else {
			return <TabIconImage
				resizeMode="contain"
				source={require('../../assets/tab/icons/atti.png')}
			/>
		}
	case '이야기':
		if (focused) {
			return <TabIconImage
				resizeMode="contain"
				source={require('../../assets/tab/icons/story-active.png')}
			/>
		} else {
			return <TabIconImage
				resizeMode="contain"
				source={require('../../assets/tab/icons/story.png')}
			/>
		}
	case '마이페이지':
		if (focused) {
			return <Image
				resizeMode="contain"
				source={require('../../assets/tab/icons/mypage-active.png')}
			/>
		} else {
			return <Image
				resizeMode="contain"
				source={require('../../assets/tab/icons/mypage.png')}
			/>
		}
	}
}

export const BottomTabs = () => <>
	<NavigationContainer>
		<Tab.Navigator
			initialRouteName="코코지 하우스"
			screenOptions={({route}) => ({
				headerShown: false,
				tabBarIcon: ({focused}) => TabBarIconOptions(route, focused),
				tabBarStyle: {
					backgroundColor: BeigeSecondColor,
					height: 70,
					paddingBottom: 10
				},
				tabBarLabelStyle: {
					color: primaryColor,
					fontSize: 14,
					fontWeight: 'bold'
				},
				tabBarActiveTintColor: primaryColor,
			})}
		>
			<Tab.Screen name="코코지 하우스" component={KokoziHouse}/>
			<Tab.Screen name="아띠" component={AttiTopTabs}/>
			<Tab.Screen name="이야기" component={StoryTopTabs}/>
			<Tab.Screen name="마이페이지" component={MyPage}/>
		</Tab.Navigator>
	</NavigationContainer>
</>

export default BottomTabs