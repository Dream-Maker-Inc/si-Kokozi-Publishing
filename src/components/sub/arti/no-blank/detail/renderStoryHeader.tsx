import styled from '@emotion/native'
import {Text, TouchableOpacity} from 'react-native'
import {BeigeFifthColor, BeigeSecondColor, BeigeThirdColor, navyColor, primaryColor} from '../../../../../common/Colors'
import ImagePaths from '../../../../../common/ImagePaths'
import React from 'react'
import AutoHeightImage from 'react-native-auto-height-image'

export const StoryWrapper = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${BeigeSecondColor};
`

export const Header = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const StoryTitle = styled(Text)`
  font-weight: bold;
  font-size: 17px;
  color: ${navyColor};
`

export const StoryRunningTime = styled(Text)`
  color: ${primaryColor};
  font-weight: bold;
`

export const Body = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`

export const RepeatButton = styled(TouchableOpacity)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
  padding: 10px;
  margin-right: 10px;
  background-color: ${BeigeThirdColor};
  border-radius: 4px;
`

export const ShuffleButton = styled(TouchableOpacity)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
  padding: 10px;
  margin-left: 10px;
  background-color: ${BeigeThirdColor};
  border-radius: 4px;
`

export const ButtonIcon = styled(AutoHeightImage)`
  margin-right: 10px;
`

export const ButtonText = styled(Text)`
  color: ${BeigeFifthColor};
`

const renderStoryHeader =
	<StoryWrapper>

		<Header>
			<StoryTitle>이야기</StoryTitle>
			<StoryRunningTime>총 46분 37초</StoryRunningTime>
		</Header>

		<Body>
			<RepeatButton>
				<ButtonIcon width={24} source={ImagePaths.components.icons.repeat}/>
				<ButtonText>반복재생</ButtonText>
			</RepeatButton>
			<ShuffleButton>
				<ButtonIcon width={24} source={ImagePaths.components.icons.shuffle}/>
				<ButtonText>셔플재생</ButtonText>
			</ShuffleButton>
		</Body>

	</StoryWrapper>

export default renderStoryHeader