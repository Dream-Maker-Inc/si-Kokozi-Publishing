import React from 'react'
import styled from '@emotion/native'
import {FlatList, SafeAreaView} from 'react-native'
import {BeigeFifthColor, BeigeSecondColor, BeigeThirdColor, navyColor, primaryColor} from '../../../../../common/Colors'
import CustomHeader from '../../../../../components/global/header/CustomHeader'
import renderGuestList from '../../../../../components/sub/story/share/select-story/RenderGuestList'
import {PlaylistData} from '../../data/playlist'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const StoryList = styled(FlatList)`
  border-top-width: 1px;
  border-top-color: ${BeigeThirdColor};
`

const ListItemWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 68px;
  border-bottom-width: 1px;
  border-bottom-color: ${BeigeThirdColor};
`

const TextContainer = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  margin-left: 24px;
`

const TitleText = styled.Text`
  font-size: 15px;
  color: ${navyColor};
`

const NameText = styled.Text`
  font-size: 12px;
  color: ${BeigeFifthColor};
`

const ButtonContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 65px;
  border-top-width: 1px;
  border-top-color: ${BeigeThirdColor};
`

const ConfirmButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 48px;
  border-radius: 8px;
  background-color: ${primaryColor};
`

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`

const StoryListItem = ({item}) =>
	<ListItemWrapper>
		<TextContainer>
			<TitleText>{item.title}</TitleText>
			<NameText>{item.name}</NameText>
		</TextContainer>
	</ListItemWrapper>

const renderStoryList =
	<StoryList data={PlaylistData} renderItem={StoryListItem}/>

const SelectStory = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="이야기 공유"/>
		{renderGuestList}
		{renderStoryList}
		<ButtonContainer>
			<ConfirmButton>
				<ButtonText>다음</ButtonText>
			</ConfirmButton>
		</ButtonContainer>
	</PageWrapper>

export default SelectStory