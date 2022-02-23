import React from 'react'
import {Text} from 'react-native'
import styled from '@emotion/native'
import ImagePaths from '../../../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeFifthColor, BeigeFirstColor} from '../../../../../../common/Colors'

export const ProfileWrapper = styled.View`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${BeigeFirstColor};
`

const Thumbnail = styled(AutoHeightImage)`
  margin: 24px 0;
`

export const ImageTitle = styled(Text)`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
`

export const ImageCaption = styled(Text)`
  color: ${BeigeFifthColor};
  text-align: center;
  font-size: 13px;
  margin-bottom: 30px;
  margin-top: 16px;
`

const renderProfile =
	<ProfileWrapper>
		<Thumbnail width={120} source={ImagePaths.arti.detail.thumbnail}/>
		<ImageTitle>플레이리스트 A</ImageTitle>
		<ImageCaption>내가 좋아하는 전래동화 모음</ImageCaption>
	</ProfileWrapper>

export default renderProfile