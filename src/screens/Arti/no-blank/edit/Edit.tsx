import React from 'react'
import styled from '@emotion/native'
import {StoryData} from '../../../../data/Data'
import {ScrollView, StatusBar} from 'react-native'
import {BeigeFirstColor, BeigeSecondColor} from '../../../../common/Colors'
import CustomHeader from '../../../../components/global/header/CustomHeader'
import BottomPlayer from '../../../../components/global/player/BottomPlayer'
import renderStory from '../../../../components/sub/arti/no-blank/edit/renderStory'
import renderProfile from '../../../../components/sub/arti/no-blank/edit/renderProfile'
import StoryHandleListItem from '../../../../components/list-items/StoryHandleListItem'

export const StoryListWrapper = styled.View`
  background-color: ${BeigeSecondColor};
`

const Edit = () =>
	<>
		<CustomHeader statusBarColor="light" left="back" title="아띠 프로필" right="edit"/>

		<ScrollView>
			{renderProfile}
			{renderStory}

			<StoryListWrapper>
				{StoryData.map(item => StoryHandleListItem(item))}
			</StoryListWrapper>
		</ScrollView>

		<BottomPlayer/>
		<StatusBar barStyle="dark-content" backgroundColor={BeigeFirstColor}/>
	</>

export default Edit