import React from 'react'
import styled from '@emotion/native'
import {TouchableOpacity} from 'react-native'
import ListItem from '../../../list-items/components/ListItem'
import {BeigeFifthColor, navyColor} from '../../../../common/Colors'
import {MyStoryData} from '../../../../screens/story/no-blank/data/story'

const MyStoryWrapper = styled.View`
  display: flex;
`

const Header = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 74px;
  padding: 0 16px;
`

const HeaderTitleText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${navyColor};
`

const HeaderCaptionText = styled.Text`
  font-size: 12px;
  color: ${BeigeFifthColor};
`

const renderMyStory =
	<MyStoryWrapper>

		<Header>
			<HeaderTitleText>내 이야기</HeaderTitleText>
			<TouchableOpacity>
				<HeaderCaptionText>전체보기</HeaderCaptionText>
			</TouchableOpacity>
		</Header>

		{MyStoryData.map(item =>
			<ListItem title={item.title} caption={item.host} time={item.time} right="more"/>
		)}

	</MyStoryWrapper>

export default renderMyStory