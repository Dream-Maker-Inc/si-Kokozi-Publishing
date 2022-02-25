import React from 'react'
import styled from '@emotion/native'
import {
	BeigeFifthColor,
	BeigeSecondColor,
	BeigeThirdColor,
	navyColor,
	primaryColor
} from '../../../../../../common/Colors'
import {Text, TouchableOpacity, View} from 'react-native'
import {StoryData} from '../../../../../../data/Data'

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

export const InformationContainer = styled(View)`
  display: flex;
  align-items: center;
  flex-direction: row;
`

export const TitleText = styled(Text)`
  color: ${navyColor};
  margin-left: 40px;
`

export const RunningTimeText = styled(Text)`
  color: ${BeigeFifthColor};
  margin-right: 20px;
`

type StoryItemModel = {
	number: number,
	title: string,
	runningTime: string
}

const RenderStoryItem = (item: StoryItemModel) =>
	<StoryItem key={item.no}>
		<TextContainer>
			<NumberText>{item.no}</NumberText>
			<TitleText>{item.title}</TitleText>
		</TextContainer>
		<InformationContainer>
			<RunningTimeText>{item.runningTime}</RunningTimeText>
		</InformationContainer>
	</StoryItem>

const renderStoryList =
	<StoryListWrapper>
		{StoryData.map(item => RenderStoryItem(item))}
	</StoryListWrapper>

export default renderStoryList