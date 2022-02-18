import React from 'react'
import {FlatList, SafeAreaView, StatusBar, TouchableOpacity} from 'react-native'
import {backgroundColor, secondaryColor, textCaptionColor, textDarkColor} from '../../../../common/Colors'
import styled from '@emotion/native'
import {playlistData} from './data'
import {Caption, Title} from 'react-native-paper'
import HeaderBackDark from '../../../../components/header/dark/HeaderBackDark'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${backgroundColor};
`

const ListItemWrapper = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-grow: 1;
  height: 100px;
`

const ContentsContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-grow: 1;
  height: 100%;
  margin: 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${secondaryColor};
`

const ItemImage = styled.Image`
  width: 80px;
  height: 80px;
  margin-left: 20px;
  border-radius: 4px;
`

const TextContainer = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 8px;
`

const ItemTitle = styled(Title)`
  color: ${textDarkColor};
  font-size: 16px;
  font-weight: bold;
`

const TextCaptionWrapper = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`

const ItemCaption = styled(Caption)`
  color: ${textCaptionColor};
  margin-right: 8px;
`

const Arrow = styled.Image`
  width: 24px;
  height: 24px;
`

const ListItem = ({item}) => <ListItemWrapper>
	<ItemImage resizeMode="contain" source={require('../../../../../assets/atti/playlist/playlist.png')}/>
	<ContentsContainer>
		<TextContainer>
			<ItemTitle>{item.title}</ItemTitle>
			<TextCaptionWrapper>
				<ItemCaption>{item.date}</ItemCaption>
				<ItemCaption>{item.count}개</ItemCaption>
				<ItemCaption>{item.runningTime}</ItemCaption>
			</TextCaptionWrapper>
		</TextContainer>
		<Arrow resizeMode="contain" source={require('../../../../../assets/mypage/arrow-right.png')}/>
	</ContentsContainer>
</ListItemWrapper>

const Playlist = () => <PageWrapper>
	<HeaderBackDark title="플레이리스트"/>
	<FlatList data={playlistData} renderItem={ListItem}/>
	<StatusBar backgroundColor={backgroundColor} barStyle="dark-content"/>
</PageWrapper>

export default Playlist