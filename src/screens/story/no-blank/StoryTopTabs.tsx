import React, {useLayoutEffect} from 'react'
import ImagePaths from '../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeSecondColor, primaryColor} from '../../../common/Colors'
import CustomHeader from '../../../components/global/header/CustomHeader'
import BottomPlayer from '../../../components/global/player/BottomPlayer'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import StoryMain from './story/StoryMain'
import PlaylistRemove from './playlist/PlaylistRemove'

const Tab = createMaterialTopTabNavigator()

const NavigationOptions = {
	headerStyle: {backgroundColor: '#FAEFE3'},
	headerTintColor: {backgroundColor: '#109724'},
	headerLeft: () => <AutoHeightImage width={20} source={ImagePaths.components.icons.notification}/>,
	headerRight: () => <AutoHeightImage width={20} source={ImagePaths.components.icons.more}/>
}

const StoryTopTabs = ({navigation}) => {
	useLayoutEffect(() => navigation.setOptions(NavigationOptions))

	return <>
		<CustomHeader statusBarColor="dark" title="이야기" rightTwoIcons/>
		<Tab.Navigator
			screenOptions={{
				tabBarLabelStyle: {fontWeight: 'bold'},
				tabBarStyle: {backgroundColor: BeigeSecondColor},
				tabBarIndicatorStyle: {backgroundColor: primaryColor}
			}}
		>
			<Tab.Screen name="이야기" component={StoryMain}/>
			<Tab.Screen name="플레이리스트" component={PlaylistRemove}/>
		</Tab.Navigator>
		<BottomPlayer/>
	</>
}

export default StoryTopTabs