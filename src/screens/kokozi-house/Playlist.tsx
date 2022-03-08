import React from 'react'
import styled from '@emotion/native'
import {StoryData} from '../../data/Data'
import {BeigeFirstColor} from '../../common/Colors'
import {FlatList, SafeAreaView, StatusBar} from 'react-native'
import renderHeader from '../../components/sub/kokozi-house/playlist/renderHeader'
import renderProfile from '../../components/sub/kokozi-house/playlist/renderProfile'
import renderButtons from '../../components/sub/kokozi-house/playlist/renderButtons'
import ListItem from '../../components/list-items/components/ListItem'

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
		<PlayingList data={StoryData}
					 renderItem={({item}) =>
						 <ListItem
							 key={item.index}
							 prefix={item.index}
							 title={item.title}
							 caption={item.author}
							 time={item.time}
							 right="play"
						 />
					 }/>
		<StatusBar barStyle="dark-content" backgroundColor={BeigeFirstColor}/>
	</PageWrapper>

export default Playlist