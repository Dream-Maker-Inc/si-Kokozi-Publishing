import React from 'react'
import {StatusBar, View} from 'react-native'
import {backgroundColor, textCaptionColor, textDarkColor} from '../../../../../../common/Colors'
import styled from '@emotion/native'
import {Caption, Divider, Paragraph, Subheading, Title} from 'react-native-paper'
import HeaderBack from '../../../../../../components/header/HeaderBack'

const PageWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${backgroundColor};
`

const Help = () => <PageWrapper>
	<HeaderBack title="도움말"/>

	<View style={{margin: 30}}>
		<Caption style={{color: textCaptionColor}}>매직아띠 등록</Caption>
		<Title style={{color: textDarkColor}}>아띠를 하우스에 넣어도 인식되지 않아요.</Title>
	</View>

	<Divider/>

	<View style={{margin: 30}}>
		<Subheading style={{fontWeight: 'bold'}}>아래와 같은 경우가 아닌지 확인해주세요.</Subheading>
		<Paragraph style={{marginTop: 30}}>1. 넣은 아띠가 매직아띠가 아닌 경우</Paragraph>
		<Paragraph>2. 이미 등록한 아띠인 경우</Paragraph>
	</View>

	<StatusBar barStyle="dark-content" backgroundColor={backgroundColor}/>
</PageWrapper>

export default Help
