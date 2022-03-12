import React from 'react'
import styled from '@emotion/native'
import {Text} from 'react-native'
import ImagePaths from '../../../../../common/ImagePaths'
import {BeigeFirstColor} from '../../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'

export const ProfileWrapper = styled.View`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${BeigeFirstColor};
`

const Thumbnail = styled(AutoHeightImage)`
  margin: 24px 0;
`

export const NameText = styled(Text)`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`

export const EditIcon = styled(AutoHeightImage)`
  margin-left: 8px;
`

export const CaptionText = styled(Text)`
  text-align: center;
  margin-bottom: 30px;
  font-size: 12px;
`

const renderProfile =
	<ProfileWrapper>
		<Thumbnail width={110} source={ImagePaths.arti.detail.thumbnail}/>

		<NameText>매직아띠
			<EditIcon width={24} source={ImagePaths.components.icons.edit}/>
		</NameText>

		<CaptionText>플레이리스트 A</CaptionText>
	</ProfileWrapper>

export default renderProfile