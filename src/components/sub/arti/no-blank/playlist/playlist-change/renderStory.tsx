import React from 'react'
import {Text} from 'react-native'
import styled from '@emotion/native'
import {BeigeSecondColor, navyColor, primaryColor} from '../../../../../../common/Colors'

export const StoryWrapper = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  padding: 24px;
  background-color: ${BeigeSecondColor};
`

export const TitleText = styled(Text)`
  font-weight: bold;
  font-size: 17px;
  color: ${navyColor};
`

export const RunningTimeText = styled(Text)`
  font-size: 14px;
  color: ${primaryColor};
`

const renderStory =
	<StoryWrapper>
		<TitleText>이야기</TitleText>
		<RunningTimeText>총 46분 37초</RunningTimeText>
	</StoryWrapper>

export default renderStory