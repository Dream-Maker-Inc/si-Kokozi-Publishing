import React from 'react'
import styled from '@emotion/native'
import {StoryData} from '../../../../data/Data'
import {ScrollView, StatusBar} from 'react-native'
import {BeigeFirstColor, BeigeSecondColor} from '../../../../common/Colors'
import CustomHeader from '../../../../components/global/header/CustomHeader'
import BottomPlayer from '../../../../components/global/player/BottomPlayer'
import renderStory from '../../../../components/sub/arti/no-blank/edit/renderStory'
import renderProfile from '../../../../components/sub/arti/no-blank/edit/renderProfile'
import ListItem from '../../../../components/list-items/components/ListItem'

export const StoryListWrapper = styled.View`
  background-color: ${BeigeSecondColor};
  padding: 0 16px;
`

const Edit = () =>
	<>
		<CustomHeader statusBarColor="light" left="back" title="아띠 프로필" right="complete"/>

		<ScrollView>
			{renderProfile}
			{renderStory}

			<StoryListWrapper>
				{StoryData.map(item =>
					<ListItem
						key={item.index}
						title={item.title}
						prefix={item.index}
						caption={item.author}
						time={item.time}
						right="handler"
					/>
				)}
			</StoryListWrapper>
		</ScrollView>

		<BottomPlayer/>
		<StatusBar barStyle="dark-content" backgroundColor={BeigeFirstColor}/>
	</>

export default Edit