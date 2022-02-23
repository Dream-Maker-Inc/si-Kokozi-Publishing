import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import styled from '@emotion/native'
import {BeigeFirstColor} from '../../common/Colors'
import renderHeader from '../../components/sub/kokozi-house/playlist/renderHeader'
import renderProfile from '../../components/sub/kokozi-house/playlist/renderProfile'
import renderButtons from '../../components/sub/kokozi-house/playlist/renderButtons'
import renderList from '../../components/sub/kokozi-house/playlist/renderList'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeFirstColor};
`

const Playlist = () =>
	<PageWrapper>
		{renderHeader}
		{renderProfile}
		{renderButtons}
		{renderList}
		<StatusBar
			barStyle="dark-content"
			backgroundColor={BeigeFirstColor}
		/>
	</PageWrapper>

export default Playlist