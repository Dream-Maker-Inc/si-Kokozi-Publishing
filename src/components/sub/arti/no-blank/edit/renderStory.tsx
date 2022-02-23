import React from 'react'
import styled from '@emotion/native'
import {Text, TouchableOpacity} from 'react-native'
import ImagePaths from '../../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeFifthColor, BeigeSecondColor, BeigeThirdColor, navyColor, primaryColor} from '../../../../../common/Colors'

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

export const TitleText = styled(Text)`
  font-size: 17px;
  font-weight: bold;
  color: ${navyColor};
`

export const RunningTimeText = styled(Text)`
  font-size: 13px;
  font-weight: bold;
  color: ${primaryColor};
`

export const ButtonWrapper = styled.View`
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

const renderStory =
	<StoryWrapper>

		<Header>
			<TitleText>이야기</TitleText>
			<RunningTimeText>총 46분 37초</RunningTimeText>
		</Header>

		<ButtonWrapper>
			<RepeatButton>
				<ButtonIcon width={24} source={ImagePaths.components.icons.repeat}/>
				<ButtonText>반복재생</ButtonText>
			</RepeatButton>

			<ShuffleButton>
				<ButtonIcon width={24} source={ImagePaths.components.icons.shuffle}/>
				<ButtonText>셔플재생</ButtonText>
			</ShuffleButton>
		</ButtonWrapper>

	</StoryWrapper>

export default renderStory