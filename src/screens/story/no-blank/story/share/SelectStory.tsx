import React from 'react'
import styled from '@emotion/native'
import {StoryData} from '../../../../../data/Data'
import {FlatList, SafeAreaView} from 'react-native'
import CustomHeader from '../../../../../components/global/header/CustomHeader'
import ListItem from '../../../../../components/list-items/components/ListItem'
import {BeigeSecondColor, BeigeThirdColor, primaryColor} from '../../../../../common/Colors'
import renderGuestList from '../../../../../components/sub/story/share/select-story/RenderGuestList'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const StoryList = styled(FlatList)`
  border-top-width: 1px;
  border-top-color: ${BeigeThirdColor};
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

const renderStoryList =
	<StoryList data={StoryData}
			   renderItem={({item}) =>
				   <ListItem
					   title={item.title}
					   caption={item.author}
					   time={item.time}
					   right="checkbox"
				   />
			   }
	/>

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