import React from 'react'
import styled from '@emotion/native'
import {Text} from 'react-native'
import ImagePaths from '../../../../../common/ImagePaths'
import {BeigeFifthColor, BeigeFirstColor} from '../../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'

export const ProfileWrapper = styled.View`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${BeigeFirstColor};
`

const ProfileImage = styled(AutoHeightImage)`
  margin: 20px 0;
`

const TitleText = styled(Text)`
  font-size: 20px;
  text-align: center;
  margin-bottom: 16px;
  font-weight: bold;
`

const DescriptionText = styled(Text)`
  width: 50%;
  font-size: 13px;
  text-align: center;
  color: ${BeigeFifthColor};
  margin-bottom: 32px;
`

const renderProfile =
	<ProfileWrapper>
		<ProfileImage width={110} source={ImagePaths.arti.all.thumbnail}/>
		<TitleText>게스트 플레이리스트</TitleText>
		<DescriptionText>소중한 나의 가족과 친구들이 녹음해준 이야기 모음</DescriptionText>
	</ProfileWrapper>

export default renderProfile