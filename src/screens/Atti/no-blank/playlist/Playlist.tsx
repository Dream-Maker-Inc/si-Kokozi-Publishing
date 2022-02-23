import React from 'react'
import styled from '@emotion/native'
import {playlistData} from './data'
import {BeigeSecondColor} from '../../../../common/Colors'
import {FlatList, SafeAreaView} from 'react-native'
import RenderListItem from '../../../../components/sub/arti/no-blank/playlist/playlist/RenderListItem'
import CustomHeader from '../../../../components/global/header/CustomHeader'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const Playlist = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="플레이리스트"/>
		<FlatList data={playlistData} renderItem={RenderListItem}/>
	</PageWrapper>

export default Playlist