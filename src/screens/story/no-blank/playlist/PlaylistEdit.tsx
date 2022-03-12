import React from 'react'
import styled from '@emotion/native'
import {SafeAreaView} from 'react-native'
import {BeigeFirstColor} from '../../../../common/Colors'
import CustomHeader from '../../../../components/global/header/CustomHeader'
import renderPlaylistInformation
	from '../../../../components/sub/story/playlist/playlist-edit/RenderPlaylistInformation'
import renderStoryList from '../../../../components/sub/story/playlist/playlist-edit/RenderStoryList'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeFirstColor};
`

const PlaylistEdit = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="light" left="back" title="플레이리스트" right="complete"/>
		{renderPlaylistInformation}
		{renderStoryList}
	</PageWrapper>

export default PlaylistEdit