import React from 'react'
import styled from '@emotion/native'
import {SafeAreaView} from 'react-native'
import {BeigeFirstColor} from '../../../../common/Colors'
import CustomHeader from '../../../../components/global/header/CustomHeader'
import renderPlaylistInformation
	from '../../../../components/sub/story/playlist/playlist-import/RenderPlaylistInformation'
import renderStoryList from '../../../../components/sub/story/playlist/playlist-import/RenderStoryList'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeFirstColor};
`

const NewPlaylist = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="light" left="back" title="플레이리스트" right="complete"/>
		{renderPlaylistInformation}
		{renderStoryList}
	</PageWrapper>

export default NewPlaylist