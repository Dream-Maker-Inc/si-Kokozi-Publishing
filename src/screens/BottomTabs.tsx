import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeSecondColor, primaryColor} from '../common/Colors'
import ImagePaths from '../common/ImagePaths'
import KokoziHouse from './kokozi-house/KokoziHouse'
import MyPage from './mypage/MyPage'
import AttiTopTabs from './Atti/no-blank/TopTabs'
import StoryTopTabs from './story/no-blank/StoryTopTabs'

const Tab = createBottomTabNavigator()

const TabBarIconOptions = (route, focused) => {
	const iconPath = ImagePaths.tab.icons
	let iconSource = ''

	switch (route.name) {
	case '코코지 하우스':
		focused
			? iconSource = iconPath.kokozi.on
			: iconSource = iconPath.kokozi.off
		break
	case '아띠':
		focused
			? iconSource = iconPath.atri.on
			: iconSource = iconPath.atri.off
		break
	case '이야기':
		focused
			? iconSource = iconPath.story.on
			: iconSource = iconPath.story.off
		break
	case '마이페이지':
		focused
			? iconSource = iconPath.mypage.on
			: iconSource = iconPath.mypage.off
		break
	}

	return <AutoHeightImage width={24} source={iconSource}/>
}

const BottomTabs = () =>
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

export default BottomTabs