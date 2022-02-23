import React, {useLayoutEffect} from 'react'
import styled from '@emotion/native'
import {TouchableOpacity} from 'react-native'
import Arti from './arti/Arti'
import All from './all/All'
import {ProgressBar} from 'react-native-paper'
import MagicArti from './magic-atti/MagicArti'
import ImagePaths from '../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {BeigeFirstColor, BeigeForthColor, BeigeSecondColor, primaryColor} from '../../../common/Colors'
import IconHeaderNotiMoreDark from '../../../components/global/header/dark/IconHeaderNotiMoreDark'

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

		<IconHeaderNotiMoreDark/>

		<Tab.Navigator screenOptions={tabOptions}>
			<Tab.Screen name="모두" component={All}/>
			<Tab.Screen name="아띠" component={Arti}/>
			<Tab.Screen name="매직 아띠" component={MagicArti}/>
		</Tab.Navigator>

		<ProgressBar
			progress={0.5}
			color={primaryColor}
			style={{backgroundColor: BeigeForthColor}}
		/>

		<PlayContainer>
			<AutoHeightImage width={40} source={ImagePaths.arti.blankThumbnail}/>
			<PlayerTitle>하우스 안에 아띠를 넣어주세요</PlayerTitle>

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