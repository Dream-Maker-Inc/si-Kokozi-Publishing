import React from 'react'
import styled from '@emotion/native'
import {StoryData} from '../../data/Data'
import {BeigeFirstColor} from '../../common/Colors'
import {FlatList, SafeAreaView} from 'react-native'
import PlayingListItem from '../../components/lists/PlayingListItem'
import renderHeader from '../../components/sub/kokozi-house/playlist/renderHeader'
import renderProfile from '../../components/sub/kokozi-house/playlist/renderProfile'
import renderButtons from '../../components/sub/kokozi-house/playlist/renderButtons'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeFirstColor};
`

const PlayingList = styled(FlatList)`
  width: 90%;
  margin: 0 auto;
`

const Playlist = () =>
	<PageWrapper>
		{renderHeader}
		{renderProfile}
		{renderButtons}
		<PlayingList data={StoryData} renderItem={PlayingListItem}/>
	</PageWrapper>

export default Playlist