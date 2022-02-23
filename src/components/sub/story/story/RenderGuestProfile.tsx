import React from 'react'
import styled from '@emotion/native'
import {ScrollView} from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import {GuestProfileData} from '../../../../screens/story/no-blank/data/story'
import {BeigeFifthColor} from '../../../../common/Colors'
import ImagePaths from '../../../../common/ImagePaths'

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

export const renderGuestProfile =
	<ScrollView horizontal>
		<ListItemWrapper>
			<AutoHeightImage source={ImagePaths.story.story.noBlank.addGuest} width={60}/>
			<GuestNameText>초대하기</GuestNameText>
		</ListItemWrapper>
		{GuestProfileData.map(data => renderGuestProfileListItem(data))}
	</ScrollView>