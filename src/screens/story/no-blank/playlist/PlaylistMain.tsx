import React from 'react'
import styled from '@emotion/native'
import ImagePaths from '../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeFifthColor, BeigeSecondColor, navyColor, primaryColor} from '../../../../common/Colors'
import {FlatList} from 'react-native'
import {PlaylistData} from '../../../../data/Data'

const PageWrapper = styled.SafeAreaView`
  width: 100%;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const HeaderContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 56px;
  padding: 0 16px;
`

const HeaderText = styled.Text`
  color: ${primaryColor};
  font-size: 13px;
  margin-left: 8px;
`

const PlaylistItemWrapper = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 0 16px 16px;
`

const ItemThumbnail = styled(AutoHeightImage)`
  border-radius: 8px;
`

const ItemContents = styled.View`
  margin-left: 16px;
`

const ItemTitle = styled.Text`
  font-size: 15px;
  color: ${navyColor};
`

const ItemCaption = styled.Text`
  font-size: 12px;
  color: ${BeigeFifthColor};
  margin-top: 8px;
`

const RenderPlaylistItem = ({item}) =>
	<PlaylistItemWrapper>
		<ItemThumbnail source={ImagePaths.arti.all.thumbnail} width={80}/>
		<ItemContents>
			<ItemTitle>{item.name}</ItemTitle>
			<ItemCaption>{item.date} {item.count}개 {item.runningTime}분</ItemCaption>
		</ItemContents>
	</PlaylistItemWrapper>

const renderPlaylist =
	<FlatList data={PlaylistData} renderItem={RenderPlaylistItem}/>

const PlaylistMain = () =>
	<PageWrapper>
		<HeaderContainer>
			<AutoHeightImage source={ImagePaths.components.icons.plus} width={24}/>
			<HeaderText>플레이리스트 만들기</HeaderText>
		</HeaderContainer>
		{renderPlaylist}
	</PageWrapper>

export default PlaylistMain