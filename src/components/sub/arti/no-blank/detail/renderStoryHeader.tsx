import React from 'react'
import {Text} from 'react-native'
import styled from '@emotion/native'
import {BeigeSecondColor, navyColor, primaryColor} from '../../../../../common/Colors'

const StoryWrapper = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${BeigeSecondColor};
`

const Header = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

const StoryTitle = styled(Text)`
  font-weight: bold;
  font-size: 17px;
  color: ${navyColor};
`

const StoryRunningTime = styled(Text)`
  color: ${primaryColor};
`

const renderStoryHeader =
	<StoryWrapper>

		<Header>
			<StoryTitle>이야기</StoryTitle>
			<StoryRunningTime>10분 30초</StoryRunningTime>
		</Header>

	</StoryWrapper>

export default renderStoryHeader