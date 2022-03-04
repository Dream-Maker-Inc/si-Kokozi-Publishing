import React from 'react'
import styled from '@emotion/native'
import {Text} from 'react-native'
import {Divider, Paragraph} from 'react-native-paper'
import {BeigeFifthColor, BeigeSecondColor, navyColor} from '../../../../../../common/Colors'
import CustomHeader from '../../../../../../components/global/header/CustomHeader'

const PageWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ViewContainer = styled.View`
  margin: 30px;
`

const CaptionText = styled(Text)`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${BeigeFifthColor};
`

const TitleText = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: ${navyColor};
`

const SubHeadingText = styled(Text)`
  font-size: 14px;
  font-weight: bold;
`

const ParagraphText = styled(Text)`
  font-size: 13px;
  margin-top: 30px;
`

const Help = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="도움말"/>

		<ViewContainer>
			<CaptionText>매직아띠 등록</CaptionText>
			<TitleText>아띠를 하우스에 넣어도 인식되지 않아요.</TitleText>
		</ViewContainer>

		<Divider/>

		<ViewContainer>
			<SubHeadingText>아래와 같은 경우가 아닌지 확인해주세요.</SubHeadingText>
			<ParagraphText>1. 넣은 아띠가 매직아띠가 아닌 경우</ParagraphText>
			<Paragraph>2. 이미 등록한 아띠인 경우</Paragraph>
		</ViewContainer>
	</PageWrapper>

export default Help
