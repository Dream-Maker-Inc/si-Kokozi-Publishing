import React from 'react'
import {FlatList} from 'react-native'
import styled from '@emotion/native'
import {PlaylistData} from '../../data/Data'
import {primaryColor} from '../../common/Colors'

type StoryPlayingListModel = {
	index: number,
	title: string,
	count: number,
	time: number
}

const PlayList = styled(FlatList)`
  width: 100%;
`

const ListItem = styled.View`
  height: 72px;
`

const NumberText = styled.Text`
  height: 100%;
  font-size: 17px;
  color: ${primaryColor};
`

const StoryPlayingList = (props: StoryPlayingListModel) => {

	const RenderListItem = () =>
		<ListItem>
			<NumberText>{props.index}</NumberText>
		</ListItem>

	return <PlayList data={PlaylistData} renderItem={RenderListItem}/>
}

export default StoryPlayingList