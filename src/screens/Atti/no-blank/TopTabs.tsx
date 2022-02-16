import React, {useLayoutEffect} from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Atti from './atti/Atti'
import MagicAtti from './magic-atti/MagicAtti'
import All from './all/All'
import {Image, TouchableOpacity} from 'react-native'
import {backgroundColor, placeholderTextColor, primaryColor} from '../../../common/Colors'
import styled from '@emotion/native'
import {ProgressBar} from 'react-native-paper'

const Tab = createMaterialTopTabNavigator()

const AttiTopTabs = ({navigation}) => {

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
			<ThumbnailImage
				resizeMode="contain"
				source={require('../../../../assets/atti/blank-thumbnail.png')}
			/>
			<ThumbnailText>하우스 안에 아띠를 넣어주세요</ThumbnailText>
			<ControllerWrapper>
				<TouchableOpacity>
					<ControllerImage
						resizeMode="contain"
						source={require('../../../../assets/atti/previous.png')}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<ControllerImage
						resizeMode="contain"
						source={require('../../../../assets/atti/next.png')}
					/>
				</TouchableOpacity>
				<TouchableOpacity>
					<ControllerImage
						resizeMode="contain"
						source={require('../../../../assets/atti/playlist.png')}
					/>
				</TouchableOpacity>
			</ControllerWrapper>
		</PlayContainer>

	</>
}

const PlayContainer = styled.View`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: row;

  height: 60px;
  padding: 0 10px;
  background-color: white;
`

const ThumbnailImage = styled.Image`
  width: 46px;
`

const ThumbnailText = styled.Text`
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

const ControllerImage = styled.Image`
  width: 36px;
  margin-right: 10px;
`

export default AttiTopTabs