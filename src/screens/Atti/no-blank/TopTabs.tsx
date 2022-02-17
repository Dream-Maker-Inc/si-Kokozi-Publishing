import React, {useLayoutEffect} from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {Image, TouchableOpacity} from 'react-native'
import {ProgressBar, Text} from 'react-native-paper'
import styled from '@emotion/native'

import {backgroundColor, placeholderTextColor, playerBackgroundColor, primaryColor} from '../../../common/Colors'

import Atti from './atti/Atti'
import MagicAtti from './magic-atti/MagicAtti'
import All from './all/All'

const Tab = createMaterialTopTabNavigator()

const HeaderLeftIcon = () => <>
	<TouchableOpacity
		onPress={() => alert('알림')}
		style={{marginLeft: 10}}
	>
		<IconImage
			resizeMode="contain"
			source={require('../../../../assets/tab/notification.png')}
		/>
	</TouchableOpacity>
</>

const HeaderRightIcon = () => <>
	<TouchableOpacity
		onPress={() => alert('더보기')}
		style={{marginRight: 20}}
	>
		<IconImage
			resizeMode="contain"
			source={require('../../../../assets/tab/more.png')}
		/>
	</TouchableOpacity>
</>

const NavigationOptions = {
	headerStyle: {backgroundColor: '#FAEFE3'},
	headerTintColor: {backgroundColor: '#109724'},
	headerLeft: () => <HeaderLeftIcon/>,
	headerRight: () => <HeaderRightIcon/>
}

const AttiTopTabs = ({navigation}) => {

	useLayoutEffect(() => navigation.setOptions(NavigationOptions))

	return <>

		<Tab.Navigator
			screenOptions={{
				tabBarLabelStyle: {fontWeight: 'bold'},
				tabBarStyle: {backgroundColor: backgroundColor},
				tabBarIndicatorStyle: {backgroundColor: primaryColor}
			}}
		>
			<Tab.Screen name="모두" component={All}/>
			<Tab.Screen name="아띠" component={Atti}/>
			<Tab.Screen name="매직 아띠" component={MagicAtti}/>
		</Tab.Navigator>

		<ProgressBar
			progress={0.5}
			color={primaryColor}
			style={{backgroundColor: '#CEC0AF'}}
		/>

		<PlayContainer>
			<Image
				style={{width: 46}}
				resizeMode="contain"
				source={require('../../../../assets/atti/blank-thumbnail.png')}
			/>
			<Text
				style={{
					marginLeft: 4,
					color: placeholderTextColor
				}}
			>하우스 안에 아띠를 넣어주세요</Text>
			<ControllerWrapper>
				<TouchableOpacity>
					<ControllerIcon
						resizeMode="contain"
						source={require('../../../../assets/atti/previous.png')}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<ControllerIcon
						resizeMode="contain"
						source={require('../../../../assets/atti/next.png')}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<ControllerIcon
						resizeMode="contain"
						source={require('../../../../assets/atti/playlist.png')}
					/>
				</TouchableOpacity>
			</ControllerWrapper>
		</PlayContainer>

	</>
}

const IconImage = styled.Image`
  height: 20px;
`

const PlayContainer = styled.View`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: row;

  height: 60px;
  padding: 0 10px;
  background-color: ${playerBackgroundColor};
`

const ControllerWrapper = styled.View`
  position: absolute;

  display: flex;
  align-items: center;
  flex-direction: row;

  right: 10px;
`

const ControllerIcon = styled.Image`
  width: 36px;
  margin-right: 10px;
`

export default AttiTopTabs