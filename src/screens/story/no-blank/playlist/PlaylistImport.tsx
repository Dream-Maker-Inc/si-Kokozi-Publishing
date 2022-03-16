import React from 'react'
import styled from '@emotion/native'
import {StoryData} from '../../../../data/Data'
import {FlatList, SafeAreaView} from 'react-native'
import CustomHeader from '../../../../components/global/header/CustomHeader'
import renderTitle from '../../../../components/sub/story/playlist/playlist-import/RenderTitle'
import {BeigeSecondColor, BeigeThirdColor, primaryColor} from '../../../../common/Colors'
import ListItem from '../../../../components/list-items/components/ListItem'
import Picker from '../../../../components/global/picker/Picker'

const PageWrapper = styled(SafeAreaView)`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const PlayList = styled(FlatList)`
  width: 100%;
  flex: 1;
  margin-top: 16px;
  border-top-width: 1px;
  border-top-color: ${BeigeThirdColor};
`

const ButtonContainer = styled.View`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
  height: 65px;
`

const Button = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 94%;
  height: 48px;
  border-radius: 8px;
  background-color: ${primaryColor};
`

const ButtonText = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: bold;
`

const PickerWrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const PlaylistImport = () =>
	<PageWrapper>

		<CustomHeader statusBarColor="dark" left="back" title="불러오기"/>
		{renderTitle}
		
		<PickerWrapper>
			<Picker defaultText="모든 이야기"/>
			<Picker defaultText="최신순"/>
		</PickerWrapper>

		<PlayList
			data={StoryData}
			renderItem={({item}) =>
				<ListItem
					title={item.title}
					caption={item.author}
					time={item.time}
					right="checkbox"
				/>
			}
		/>

		<ButtonContainer>
			<Button>
				<ButtonText>불러오기</ButtonText>
			</Button>
		</ButtonContainer>

	</PageWrapper>

export default PlaylistImport