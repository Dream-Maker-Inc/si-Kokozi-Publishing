import React from 'react'
import styled from '@emotion/native'
import {BeigeSecondColor} from '../../../../common/Colors'
import {FlatList, SafeAreaView} from 'react-native'
import CustomHeader from '../../../../components/global/header/CustomHeader'
import {PlaylistData} from '../../../../data/Data'
import PlayListItem from '../../../../components/list-items/PlayListItem'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const Playlist = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="플레이리스트"/>
		<FlatList data={PlaylistData} renderItem={PlayListItem}/>
	</PageWrapper>

export default Playlist