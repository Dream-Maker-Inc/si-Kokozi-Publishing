import {ViewContainer} from './renderTitle'
import React from 'react'
import styled from '@emotion/native'
import ImagePaths from '../../../../common/ImagePaths'
import {navyColor} from '../../../../common/Colors'

const HelpImage = styled.Image`
  width: 100%;
  height: 500px;
  margin-top: 24px;
`

const ContentText = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: ${navyColor};
`

const renderContents =
	<ViewContainer>
		<ContentText>불빛은 코코지 하우스의 상태를 알려줘요.</ContentText>
		<ContentText>불빛의 의미는 다음과 같아요.</ContentText>
		<HelpImage resizeMode="contain" source={ImagePaths.kokoziHouse.help}/>
	</ViewContainer>

export default renderContents