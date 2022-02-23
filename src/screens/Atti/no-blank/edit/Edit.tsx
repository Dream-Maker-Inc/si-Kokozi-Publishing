import React from 'react'
import {ScrollView, StatusBar} from 'react-native'
import {BeigeFirstColor} from '../../../../common/Colors'
import BottomPlayer from '../../../../components/global/player/BottomPlayer'
import renderStory from '../../../../components/sub/arti/no-blank/edit/renderStory'
import renderProfile from '../../../../components/sub/arti/no-blank/edit/renderProfile'
import renderStoryList from '../../../../components/sub/arti/no-blank/edit/renderStoryList'
import CustomHeader from '../../../../components/global/header/CustomHeader'

const Edit = () =>
	<>
		<CustomHeader statusBarColor="light" left="back" title="아띠 프로필" right="edit"/>

		<ScrollView>
			{renderProfile}
			{renderStory}
			{renderStoryList}
		</ScrollView>

		<BottomPlayer/>
		<StatusBar barStyle="dark-content" backgroundColor={BeigeFirstColor}/>
	</>

export default Edit