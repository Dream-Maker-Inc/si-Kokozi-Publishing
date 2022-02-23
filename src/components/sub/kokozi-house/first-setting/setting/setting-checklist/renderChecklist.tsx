import React from 'react'
import styled from '@emotion/native'
import {Paragraph} from 'react-native-paper'
import AutoHeightImage from 'react-native-auto-height-image'
import {navyColor} from '../../../../../../common/Colors'
import ImagePaths from '../../../../../../common/ImagePaths'

const ListContainer = styled.View`
  margin-top: 100px;
  padding-left: 24px;
`

const ListColumn = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 30px;
`

const ListText = styled(Paragraph)`
  margin-left: 12px;
  font-size: 14px;
  color: ${navyColor};
`

const TextMark = styled(Paragraph)`
  font-size: 14px;
  font-weight: bold;
  color: ${navyColor};
`

const renderChecklist =
	<ListContainer>
		<ListColumn>
			<AutoHeightImage width={16} source={ImagePaths.components.icons.check}/>
			<ListText> 코코지 하우스의 <TextMark> 충전 케이블이 연결</TextMark> 되어 있나요? </ListText>
		</ListColumn>
		<ListColumn>
			<AutoHeightImage width={16} source={ImagePaths.components.icons.check}/>
			<ListText> 코코지 하우스의 <TextMark> 전원이 켜져 </TextMark> 있나요? </ListText>
		</ListColumn>
		<ListColumn>
			<AutoHeightImage width={16} source={ImagePaths.components.icons.check}/>
			<ListText> <TextMark>스마트폰 와이파이(Wi-fi)에 연결</TextMark> 되어 있나요? </ListText>
		</ListColumn>
	</ListContainer>

export default renderChecklist