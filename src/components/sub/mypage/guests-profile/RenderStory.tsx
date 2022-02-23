import React from 'react'
import styled from '@emotion/native'
import {Text, TouchableOpacity, View} from 'react-native'
import {BeigeFifthColor, BeigeThirdColor, navyColor} from '../../../../common/Colors'

const StoryWrapper = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding: 14px 24px;
  border-bottom-width: 1px;
  border-bottom-color: ${BeigeThirdColor};
`

const VerticalContainer = styled(View)`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

const StoryTitle = styled(Text)`
  font-size: 15px;
  color: ${navyColor};
`

const StoryAuthor = styled(Text)`
  font-size: 12px;
  color: ${BeigeFifthColor};
`

const StoryRunningTime = styled(Text)`
  font-size: 13px;
  color: ${BeigeFifthColor};
`

const RenderStory = ({item}) =>
	<StoryWrapper>
		<VerticalContainer>
			<StoryTitle>{item.title}</StoryTitle>
			<StoryAuthor>{item.author}</StoryAuthor>
		</VerticalContainer>
		<StoryRunningTime>{item.runningTime}</StoryRunningTime>
	</StoryWrapper>

export default RenderStory