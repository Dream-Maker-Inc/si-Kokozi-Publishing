import React from 'react'
import styled from '@emotion/native'
import {BeigeFifthColor, BeigeSecondColor, BeigeThirdColor, navyColor} from '../../../../../common/Colors'
import {ScrollView} from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../../../common/ImagePaths'

const PlaylistWrapper = styled.View`
  width: 100%;
  margin-top: 32px;
  padding: 24px 16px;
  background-color: ${BeigeSecondColor};
`

const TitleContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`

const TitleText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${navyColor};
`

const CountText = styled.Text`
  font-size: 16px;
  color: ${BeigeFifthColor};
`

const PlaylistScrollView = styled(ScrollView)`
  margin-top: 24px;
`

const PlaylistItemWrapper = styled.View`
  display: flex;
  align-items: center;
  margin-right: 16px;
`

const PlaylistItemImage = styled(AutoHeightImage)`
  border-radius: 4px;
  border: 1px solid ${BeigeThirdColor};
`

const PlaylistItemText = styled.Text`
  font-size: 13px;
  margin-top: 8px;
  color: ${navyColor};
`

const renderPlaylistItem =
	<PlaylistItemWrapper>
		<PlaylistItemImage source={ImagePaths.kokoziHouse.thumbnail} width={112}/>
		<PlaylistItemText>이야기 플레이리스트</PlaylistItemText>
	</PlaylistItemWrapper>

const renderPlaylist =
	<PlaylistWrapper>
		<TitleContainer>
			<TitleText>담은 플레이리스트</TitleText>
			<CountText>4개</CountText>
		</TitleContainer>
		<PlaylistScrollView horizontal>
			{renderPlaylistItem}
			{renderPlaylistItem}
			{renderPlaylistItem}
			{renderPlaylistItem}
		</PlaylistScrollView>
	</PlaylistWrapper>

export default renderPlaylist