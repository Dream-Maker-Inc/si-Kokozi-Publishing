import React from 'react'
import styled from '@emotion/native'
import {
	BeigeFifthColor,
	BeigeSecondColor,
	BeigeThirdColor,
	navyColor,
	primaryColor
} from '../../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../../../common/ImagePaths'
import {StoryData} from '../../../../../data/Data'
import {Checkbox} from 'react-native-paper'

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

const ListItem = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 68px;
  border-bottom-color: ${BeigeThirdColor};
  border-bottom-width: 1px;
`

const LeftContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`

const TextContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const NumberText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${primaryColor};
`

const TitleText = styled.Text`
  font-size: 15px;
  color: ${navyColor};
  margin-left: 24px;
`

const AuthorText = styled.Text`
  font-size: 12px;
  color: ${BeigeFifthColor};
  margin-left: 24px;
`

const RightContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const RenderLists = () =>
	StoryData.map(data =>
		<ListItem key={data.index}>
			<LeftContainer>
				<NumberText>{data.index}</NumberText>
				<TextContainer>
					<TitleText>{data.title}</TitleText>
					<AuthorText>{data.author}</AuthorText>
				</TextContainer>
			</LeftContainer>
			<RightContainer>
				<Checkbox status="unchecked" color={primaryColor}/>
				<AutoHeightImage source={ImagePaths.components.icons.handle} width={24}/>
			</RightContainer>
		</ListItem>
	)

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
			<RenderLists/>
		</List>

	</StoryListWrapper>

export default renderStoryList