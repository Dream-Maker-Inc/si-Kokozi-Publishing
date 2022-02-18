import React, {useLayoutEffect} from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Arti from './arti/Arti'
import MagicArti from './magic-atti/MagicArti'
import All from './all/All'
import {Image, TouchableOpacity} from 'react-native'
import {BeigeSecondColor, primaryColor} from '../../../common/Colors'
import PageBottomPlayerBlank from '../../../components/player/PageBottomPlayerBlank'

const Tab = createMaterialTopTabNavigator()

const BlankAttiTopTabs = ({navigation}) => {

	useLayoutEffect(() => {
		navigation.setOptions({
			headerStyle: {backgroundColor: '#FAEFE3'},
			headerTintColor: {backgroundColor: '#109724'},
			headerLeft: () => (
				<TouchableOpacity
					onPress={() => alert('알림')}
					style={{marginLeft: 10}}
				>
					<Image
						resizeMode="contain"
						style={{height: 20}}
						source={require('../../../../assets/tab/notification.png')}
					/>
				</TouchableOpacity>
			),
			headerRight: () => (
				<TouchableOpacity
					onPress={() => alert('더보기')}
					style={{marginRight: 20}}
				>
					<Image
						resizeMode="contain"
						style={{height: 20}}
						source={require('../../../../assets/tab/more.png')}
					/>
				</TouchableOpacity>
			)
		})
	})

	return <>

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
		<PageBottomPlayerBlank/>
	</>
}

export default BlankAttiTopTabs