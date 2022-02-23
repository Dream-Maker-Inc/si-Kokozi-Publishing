import React from 'react'
import {ScrollView, StatusBar} from 'react-native'
import {BeigeFirstColor} from '../../../../common/Colors'
import BottomPlayer from '../../../../components/global/player/BottomPlayer'
import renderStory from '../../../../components/sub/arti/no-blank/edit/renderStory'
import renderProfile from '../../../../components/sub/arti/no-blank/edit/renderProfile'
import renderStoryList from '../../../../components/sub/arti/no-blank/edit/renderStoryList'
import HeaderBackEditLight from '../../../../components/global/header/light/HeaderBackEditLight'

const Edit = () =>
	<>
		<HeaderBackEditLight title="아띠 프로필"/>

		<ScrollView>
			{renderProfile}
			{renderStory}
			{renderStoryList}
		</ScrollView>

		<BottomPlayer/>
		<StatusBar barStyle="dark-content" backgroundColor={BeigeFirstColor}/>
	</>

export default Edit