import React from 'react'
import styled from '@emotion/native'
import {playlistData} from './data'
import {BeigeSecondColor} from '../../../../common/Colors'
import {FlatList, SafeAreaView, StatusBar} from 'react-native'
import HeaderBackDark from '../../../../components/global/header/dark/HeaderBackDark'
import RenderListItem from '../../../../components/sub/arti/no-blank/playlist/playlist/RenderListItem'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const Playlist = () =>
	<PageWrapper>
		<HeaderBackDark title="플레이리스트"/>
		<FlatList data={playlistData} renderItem={RenderListItem}/>
		<StatusBar backgroundColor={BeigeSecondColor} barStyle="dark-content"/>
	</PageWrapper>

export default Playlist