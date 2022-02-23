import React from 'react'
import {ScrollView} from 'react-native'
import BottomPlayer from '../../../../components/global/player/BottomPlayer'
import CustomHeader from '../../../../components/global/header/CustomHeader'
import renderProfile from '../../../../components/sub/arti/no-blank/detail/RenderProfile'
import renderStoryList from '../../../../components/sub/arti/no-blank/detail/RenderStoryList'
import renderStoryHeader from '../../../../components/sub/arti/no-blank/detail/renderStoryHeader'

const Detail = () =>
	<>
		<CustomHeader statusBarColor="light" left="back" title="아띠 프로필" right="edit"/>

		<ScrollView>
			{renderProfile}
			{renderStoryHeader}
			{renderStoryList}
		</ScrollView>

		<BottomPlayer/>
	</>

export default Detail