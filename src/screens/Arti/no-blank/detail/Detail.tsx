import React from 'react'
import styled from '@emotion/native'
import {ScrollView, View} from 'react-native'
import {StoryData} from '../../../../data/Data'
import {BeigeSecondColor} from '../../../../common/Colors'
import StoryListItem from '../../../../components/list-items/StoryListItem'
import BottomPlayer from '../../../../components/global/player/BottomPlayer'
import CustomHeader from '../../../../components/global/header/CustomHeader'
import renderProfile from '../../../../components/sub/arti/no-blank/detail/RenderProfile'
import renderStoryHeader from '../../../../components/sub/arti/no-blank/detail/renderStoryHeader'

export const StoryListWrapper = styled(View)`
  background-color: ${BeigeSecondColor};
`

const Detail = () =>
	<>
		<CustomHeader statusBarColor="light" left="back" title="아띠 프로필" right="edit"/>

		<ScrollView>
			{renderProfile}
			{renderStoryHeader}

			<StoryListWrapper>
				{StoryData.map(item => StoryListItem(item))}
			</StoryListWrapper>
		</ScrollView>

		<BottomPlayer/>
	</>

export default Detail