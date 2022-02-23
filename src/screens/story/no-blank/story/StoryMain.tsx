import React from 'react'
import styled from '@emotion/native'
import {SafeAreaView, ScrollView, View} from 'react-native'
import {BeigeSecondColor, BeigeThirdColor} from '../../../../common/Colors'
import renderMyStory from '../../../../components/sub/story/story/RenderMyStory'
import renderGuestStory from '../../../../components/sub/story/story/RenderGuestStory'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const StyledScrollView = styled(ScrollView)`
  width: 100%;
`

const Divider = styled(View)`
  width: 100%;
  height: 8px;
  background-color: ${BeigeThirdColor};
`

const StoryMain = () =>
	<PageWrapper>
		<StyledScrollView>
			{renderMyStory}
			<Divider/>
			{renderGuestStory}
		</StyledScrollView>
	</PageWrapper>

export default StoryMain