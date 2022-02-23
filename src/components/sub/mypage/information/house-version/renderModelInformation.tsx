import React from 'react'
import {View} from 'react-native'
import styled from '@emotion/native'
import {Paragraph} from 'react-native-paper'
import {TitleText} from './renderVersionInformation'
import {navyColor} from '../../../../../common/Colors'

const Wrapper = styled(View)`
  display: flex;
  padding: 0 20px;
`

const Container = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`

const ModelParagraph = styled(Paragraph)`
  font-size: 14px;
  margin-top: 38px;
  color: ${navyColor};
`

const renderModelInformation =
	<Wrapper>
		<TitleText>모델명 확인하기</TitleText>
		<Container>
			<ModelParagraph>코코지 하우스 모델명</ModelParagraph>
			<ModelParagraph>KKZHSE1A</ModelParagraph>
		</Container>
	</Wrapper>

export default renderModelInformation