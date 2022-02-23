import React, {useLayoutEffect} from 'react'
import Arti from './arti/Arti'
import All from './all/All'
import MagicArti from './magic-atti/MagicArti'
import ImagePaths from '../../../common/ImagePaths'
import {BeigeSecondColor, primaryColor} from '../../../common/Colors'
import BottomPlayer from '../../../components/global/player/BottomPlayer'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import AutoHeightImage from 'react-native-auto-height-image'
import CustomHeader from '../../../components/global/header/CustomHeader'

const Tab = createMaterialTopTabNavigator()

const NavigationOptions = {
	headerStyle: {backgroundColor: '#FAEFE3'},
	headerTintColor: {backgroundColor: '#109724'},
	headerLeft: () => <AutoHeightImage width={20} source={ImagePaths.components.icons.notification}/>,
	headerRight: () => <AutoHeightImage width={20} source={ImagePaths.components.icons.more}/>
}

const BlankAttiTopTabs = ({navigation}) => {
	useLayoutEffect(() => navigation.setOptions(NavigationOptions))

	return <>
		<CustomHeader statusBarColor="dark" logo left="notification" right="more"/>
		<Tab.Navigator
			screenOptions={{
				tabBarLabelStyle: {fontWeight: 'bold'},
				tabBarStyle: {backgroundColor: BeigeSecondColor},
				tabBarIndicatorStyle: {backgroundColor: primaryColor}
			}}
		>
			<Tab.Screen name="모두" component={All}/>
			<Tab.Screen name="아띠" component={Arti}/>
			<Tab.Screen name="매직 아띠" component={MagicArti}/>
		</Tab.Navigator>
		<BottomPlayer/>
	</>
}

export default BlankAttiTopTabs