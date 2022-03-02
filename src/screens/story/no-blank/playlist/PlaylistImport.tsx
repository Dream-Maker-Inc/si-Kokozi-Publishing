import React from 'react'
import styled from '@emotion/native'
import {Checkbox} from 'react-native-paper'
import {StoryData} from '../../../../data/Data'
import {FlatList, SafeAreaView} from 'react-native'
import CustomHeader from '../../../../components/global/header/CustomHeader'
import renderTitle from '../../../../components/sub/story/playlist/playlist-import/RenderTitle'
import renderPickers from '../../../../components/sub/story/playlist/playlist-import/RenderPickers'
import {BeigeFifthColor, BeigeSecondColor, BeigeThirdColor, navyColor, primaryColor} from '../../../../common/Colors'

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

const PlaylistItemWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 68px;
  border-bottom-width: 1px;
  border-bottom-color: ${BeigeThirdColor};
`

const TextContainer = styled.View`
  display: flex;
  margin-left: 24px;
`

const TitleText = styled.Text`
  font-size: 15px;
  color: ${navyColor};
`

const CaptionText = styled.Text`
  font-size: 12px;
  color: ${BeigeFifthColor};
`

const RightContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-right: 20px;
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

const RenderPlaylistItem = ({item}) =>
	<PlaylistItemWrapper>
		<TextContainer>
			<TitleText>{item.title}</TitleText>
			<CaptionText>{item.author}</CaptionText>
		</TextContainer>
		<RightContainer>
			<CaptionText>{item.runningTime}</CaptionText>
			<Checkbox status="checked" color={primaryColor}/>
		</RightContainer>
	</PlaylistItemWrapper>

const PlaylistImport = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="불러오기"/>
		{renderTitle}
		{renderPickers}
		<PlayList data={StoryData} renderItem={RenderPlaylistItem}/>
		<ButtonContainer>
			<Button>
				<ButtonText>불러오기</ButtonText>
			</Button>
		</ButtonContainer>
	</PageWrapper>

export default PlaylistImport