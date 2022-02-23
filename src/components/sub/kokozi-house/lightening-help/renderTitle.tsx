import React from 'react'
import styled from '@emotion/native'
import {Text} from 'react-native'
import {BeigeFifthColor, navyColor} from '../../../../common/Colors'

export const ViewContainer = styled.View`
  margin: 30px;
`

const CaptionText = styled(Text)`
  font-size: 13px;
  font-weight: bold;
  color: ${BeigeFifthColor};
`

const TitleText = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: ${navyColor};
`

const renderTitle =
	<ViewContainer>
		<CaptionText>게스트 관리</CaptionText>
		<TitleText>[코코지 하우스 LED 불빛] 코코지 하우스 다락방에서 나오는 불빛의 의미는 무엇인가요?</TitleText>
	</ViewContainer>

export default renderTitle