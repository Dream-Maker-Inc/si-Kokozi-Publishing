import React from 'react'
import styled from '@emotion/native'
import {ScrollView} from 'react-native'
import {GuestProfileData} from '../../../../screens/story/no-blank/data/story'
import VerticalListItem from '../../../list-items/components/VerticalListItem'

const ScrollViewWrapper = styled.View`
  height: 134px;
`

const renderGuestStoryProfile =
	<ScrollViewWrapper>
		<ScrollView horizontal>
			{GuestProfileData.map(item =>
				<VerticalListItem image={item.image} title={item.name}/>
			)}
		</ScrollView>
	</ScrollViewWrapper>

export default renderGuestStoryProfile