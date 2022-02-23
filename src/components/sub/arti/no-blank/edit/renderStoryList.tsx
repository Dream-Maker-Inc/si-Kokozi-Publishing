import React from 'react'
import styled from '@emotion/native'
import {Text, TouchableOpacity, View} from 'react-native'
import ImagePaths from '../../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {storyData} from '../../../../../screens/Atti/no-blank/detail/data'
import {BeigeFifthColor, BeigeSecondColor, BeigeThirdColor, navyColor, primaryColor} from '../../../../../common/Colors'

export const NumberText = styled(Text)`
  color: ${primaryColor};
  font-size: 17px;
  font-weight: bold;
`

export const StoryListWrapper = styled(View)`
  background-color: ${BeigeSecondColor};
`

export const StoryItem = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-grow: 1;
  height: 80px;
  margin: 0 30px;
  background-color: ${BeigeSecondColor};
  border-bottom-color: ${BeigeThirdColor};
  border-bottom-width: 1px;
`

export const TextContainer = styled(View)`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
`

export const InfoContainer = styled(View)`
  display: flex;
  align-items: center;
  flex-direction: row;
`

export const TitleText = styled(Text)`
  color: ${navyColor};
  margin-left: 40px;
  font-size: 15px;
`

export const RunningTimeText = styled(Text)`
  color: ${BeigeFifthColor};
  margin-right: 20px;
  font-size: 12px;
`

type StoryItemModel = {
	number: number,
	title: string,
	runningTime: string
}

const RenderStoryItem = (item: StoryItemModel) =>
	<StoryItem>
		<TextContainer>
			<NumberText>0{item.number}</NumberText>
			<TitleText>{item.title}</TitleText>
		</TextContainer>
		<InfoContainer>
			<RunningTimeText>{item.runningTime}</RunningTimeText>
			<AutoHeightImage width={24} source={ImagePaths.components.icons.handle}/>
		</InfoContainer>
	</StoryItem>

const renderStoryList =
	<StoryListWrapper>
		{storyData.map(item => RenderStoryItem(item))}
	</StoryListWrapper>

export default renderStoryList