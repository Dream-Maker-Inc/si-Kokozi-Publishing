import React, {useLayoutEffect} from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {TouchableOpacity} from 'react-native'
import {ProgressBar} from 'react-native-paper'
import styled from '@emotion/native'

import {BeigeSecondColor, placeholderTextColor, playerBackgroundColor, primaryColor} from '../../../common/Colors'

import Arti from './arti/Arti'
import MagicArti from './magic-atti/MagicArti'
import All from './all/All'

const Tab = createMaterialTopTabNavigator()

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

const PlayerThumbnail = styled.Image`
  width: 46px;
`

const PlayerTitle = styled.Text`
  margin-left: 4px;
  color: ${placeholderTextColor};
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

const MenuIcon = styled(TouchableOpacity)`
  margin-left: 10px;
  margin-right: 10px;
`

const HeaderLeftIcon = () => <>
	<MenuIcon
		onPress={() => alert('알림')}
	>
		<IconImage
			resizeMode="contain"
			source={require('../../../../assets/tab/notification.png')}
		/>
	</MenuIcon>
</>

const HeaderRightIcon = () => <>
	<MenuIcon
		onPress={() => alert('더보기')}
	>
		<IconImage
			resizeMode="contain"
			source={require('../../../../assets/tab/more.png')}
		/>
	</MenuIcon>
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
				tabBarStyle: {backgroundColor: BeigeSecondColor},
				tabBarIndicatorStyle: {backgroundColor: primaryColor}
			}}
		>
			<Tab.Screen name="모두" component={All}/>
			<Tab.Screen name="아띠" component={Arti}/>
			<Tab.Screen name="매직 아띠" component={MagicArti}/>
		</Tab.Navigator>

		<ProgressBar
			progress={0.5}
			color={primaryColor}
			style={{backgroundColor: '#CEC0AF'}}
		/>

		<PlayContainer>
			<PlayerThumbnail
				resizeMode="contain"
				source={require('../../../../assets/atti/blank-thumbnail.png')}
			/>
			<PlayerTitle>하우스 안에 아띠를 넣어주세요</PlayerTitle>
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

export default AttiTopTabs