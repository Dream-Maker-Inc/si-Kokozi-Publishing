import React from 'react'
import {ScrollView, StatusBar} from 'react-native'
import {BeigeFirstColor} from '../../../../common/Colors'
import BottomPlayer from '../../../../components/global/player/BottomPlayer'
import renderProfile from '../../../../components/sub/arti/no-blank/detail/RenderProfile'
import renderStoryList from '../../../../components/sub/arti/no-blank/detail/RenderStoryList'
import HeaderBackEditLight from '../../../../components/global/header/light/HeaderBackEditLight'
import renderStoryHeader from '../../../../components/sub/arti/no-blank/detail/renderStoryHeader'

const Detail = () =>
	<>
		<HeaderBackEditLight title="아띠 프로필"/>

		<ScrollView>
			{renderProfile}
			{renderStoryHeader}
			{renderStoryList}
		</ScrollView>

		<BottomPlayer/>
		<StatusBar barStyle="dark-content" backgroundColor={BeigeFirstColor}/>
	</>

export default Detail