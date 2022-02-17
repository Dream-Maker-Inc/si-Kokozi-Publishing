import React from 'react'
import {StatusBar} from 'react-native'
import {backgroundColor, textCaptionColor, textDarkColor} from '../../../../../../common/Colors'
import styled from '@emotion/native'
import {Caption, Divider, Paragraph, Subheading, Title} from 'react-native-paper'
import HeaderBack from '../../../../../../components/header/HeaderBack'

const PageWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${backgroundColor};
`

const ViewContainer = styled.View`
  margin: 30px;
`

const CaptionText = styled(Caption)`
  color: ${textCaptionColor};
`

const TitleText = styled(Title)`
  color: ${textDarkColor};
`

const SubHeadingText = styled(Subheading)`
  font-weight: bold;
`

const ParagraphText = styled(Paragraph)`
  margin-top: 30px;
`

const Help = () => <PageWrapper>
	<HeaderBack title="도움말"/>

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

	<StatusBar barStyle="dark-content" backgroundColor={backgroundColor}/>
</PageWrapper>

export default Help
