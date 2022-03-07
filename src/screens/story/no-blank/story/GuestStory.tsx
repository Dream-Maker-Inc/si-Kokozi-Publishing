import React from 'react'
import styled from '@emotion/native'
import {MyStoryData} from '../data/story'
import {SafeAreaView} from 'react-native'
import {BeigeSecondColor} from '../../../../common/Colors'
import CustomHeader from '../../../../components/global/header/CustomHeader'
import ListItem from '../../../../components/list-items/components/ListItem'
import renderGuestStoryProfile from '../../../../components/sub/story/story-main/RenderGuestStoryProfile'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const GuestStory = () => {
	return <PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="게스트 이야기"/>
		{renderGuestStoryProfile}
		{MyStoryData.map(data =>
			<ListItem title={data.title} caption={data.host} time={data.time} right="more"/>
		)}
	</PageWrapper>
}

export default GuestStory