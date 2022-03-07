import React from 'react'
import styled from '@emotion/native'
import {MyStoryData} from '../data/story'
import {SafeAreaView} from 'react-native'
import {BeigeSecondColor} from '../../../../common/Colors'
import ListItem from '../../../../components/list-items/components/ListItem'
import CustomHeader from '../../../../components/global/header/CustomHeader'
import RenderFilter from '../../../../components/sub/story/my-story/RenderFilter'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const MyStory = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="내 이야기" right="record"/>
		<RenderFilter/>
		{MyStoryData.map(data =>
			<ListItem title={data.title} caption={data.host} time={data.time} right="more"/>
		)}
	</PageWrapper>


export default MyStory