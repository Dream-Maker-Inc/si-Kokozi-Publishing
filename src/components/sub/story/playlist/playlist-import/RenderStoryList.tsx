import React from 'react'
import styled from '@emotion/native'
import {BeigeFifthColor, BeigeSecondColor} from '../../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../../../common/ImagePaths'
import {StoryData} from '../../../../../data/Data'
import ListItem from '../../../../list-items/components/ListItem'

const StoryListWrapper = styled.View`
  width: 100%;
  flex: 1;
  margin-top: 40px;
  background-color: ${BeigeSecondColor};
`

const Header = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  padding: 0 16px;
`

const StyledButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  flex-direction: row;
`

const StyledButtonText = styled.Text`
  font-size: 14px;
  margin-left: 4px;
  color: ${BeigeFifthColor};
`

const List = styled.View`
  width: 100%;
  padding: 0 16px;
`

const renderStoryList =
	<StoryListWrapper>

		<Header>
			<StyledButton>
				<AutoHeightImage source={ImagePaths.components.icons.plus} width={24}/>
				<StyledButtonText>이야기 불러오기</StyledButtonText>
			</StyledButton>
			<StyledButton>
				<AutoHeightImage source={ImagePaths.components.icons.check} width={24}/>
				<StyledButtonText>전체선택</StyledButtonText>
			</StyledButton>
		</Header>

		<List>
			{StoryData.map(data =>
				<ListItem key={data.index} prefix={data.index} title={data.title} caption={data.author} right="both"/>
			)}
		</List>

	</StoryListWrapper>

export default renderStoryList