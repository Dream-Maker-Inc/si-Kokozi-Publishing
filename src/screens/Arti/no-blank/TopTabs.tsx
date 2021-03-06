import React, {useLayoutEffect} from 'react'
import styled from '@emotion/native'
import {TouchableOpacity} from 'react-native'
import All from './all/All'
import {ProgressBar} from 'react-native-paper'
import ImagePaths from '../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import CustomHeader from '../../../components/global/header/CustomHeader'
import {BeigeFirstColor, BeigeForthColor, BeigeSecondColor, primaryColor} from '../../../common/Colors'

const Tab = createMaterialTopTabNavigator()

const PlayContainer = styled.View`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: row;

  height: 60px;
  padding: 0 10px;
  background-color: ${BeigeFirstColor};
`

const PlayerTitle = styled.Text`
  margin-left: 4px;
  color: ${BeigeForthColor};
`

const ControllerWrapper = styled.View`
  position: absolute;

  display: flex;
  align-items: center;
  flex-direction: row;

  right: 10px;
`

const ControllerIcon = styled(AutoHeightImage)`
  margin-right: 10px;
`

const MenuIcon = styled(TouchableOpacity)`
  margin-left: 10px;
  margin-right: 10px;
`

const renderHeaderLeftIcon =
	<MenuIcon>
		<AutoHeightImage width={24} source={ImagePaths.components.icons.notification}/>
	</MenuIcon>

const renderHeaderRightIcon =
	<MenuIcon>
		<AutoHeightImage width={24} source={ImagePaths.components.icons.more}/>
	</MenuIcon>

const NavigationOptions = {
	headerStyle: {backgroundColor: BeigeSecondColor},
	headerTintColor: {backgroundColor: primaryColor},
	headerLeft: () => renderHeaderLeftIcon,
	headerRight: () => renderHeaderRightIcon
}

const AttiTopTabs = ({navigation}) => {
	useLayoutEffect(() => navigation.setOptions(NavigationOptions))

	const tabOptions = {
		tabBarLabelStyle: {fontWeight: 'bold'},
		tabBarStyle: {backgroundColor: BeigeSecondColor},
		tabBarIndicatorStyle: {backgroundColor: primaryColor}
	}

	return <>
		<CustomHeader statusBarColor="dark" logo left="notification" right="more"/>

		<Tab.Navigator screenOptions={tabOptions}>
			<Tab.Screen name="??????" component={All}/>
			<Tab.Screen name="??????" component={All}/>
			<Tab.Screen name="?????? ??????" component={All}/>
		</Tab.Navigator>

		<ProgressBar
			progress={0.5}
			color={primaryColor}
			style={{backgroundColor: BeigeForthColor}}
		/>

		<PlayContainer>
			<AutoHeightImage width={40} source={ImagePaths.arti.blankThumbnail}/>
			<PlayerTitle>????????? ?????? ????????? ???????????????</PlayerTitle>

			<ControllerWrapper>
				<TouchableOpacity>
					<ControllerIcon width={32} source={ImagePaths.components.icons.previous}/>
				</TouchableOpacity>
				<TouchableOpacity>
					<ControllerIcon width={32} source={ImagePaths.components.icons.next}/>
				</TouchableOpacity>
				<TouchableOpacity>
					<ControllerIcon width={32} source={ImagePaths.components.icons.playlist}/>
				</TouchableOpacity>
			</ControllerWrapper>
		</PlayContainer>

	</>
}

export default AttiTopTabs