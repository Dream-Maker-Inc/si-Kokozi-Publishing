import React from 'react'
import styled from '@emotion/native'
import {ScrollView} from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import {GuestProfileData} from '../../../../screens/story/no-blank/data/story'
import {BeigeFifthColor} from '../../../../common/Colors'

const ScrollViewWrapper = styled.View`
  height: 134px;
`

const ListItemWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`

const GuestNameText = styled.Text`
  margin: 8px 0 23px;
  font-size: 12px;
  color: ${BeigeFifthColor};
`

type GuestProfileModel = {
	image: string,
	name: string
}

const renderGuestProfileListItem = (data: GuestProfileModel) =>
	<ListItemWrapper>
		<AutoHeightImage source={data.image} width={60}/>
		<GuestNameText>{data.name}</GuestNameText>
	</ListItemWrapper>

const renderGuestStoryProfile =
	<ScrollViewWrapper>
		<ScrollView horizontal>
			{GuestProfileData.map(data => renderGuestProfileListItem(data))}
		</ScrollView>
	</ScrollViewWrapper>

export default renderGuestStoryProfile