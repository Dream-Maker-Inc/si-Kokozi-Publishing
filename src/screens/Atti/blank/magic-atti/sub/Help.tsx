import React from 'react'
import {Image, StatusBar, View} from 'react-native'
import {backgroundColor, primaryColor, textCaptionColor, textDarkColor} from '../../../../../common/Colors'
import styled from '@emotion/native'
import {Caption, Divider, Paragraph, Subheading, Title} from 'react-native-paper'

const Help = () => <PageWrapper>
	<Header>
		<BackButtonContainer>
			<Image
				resizeMode="contain"
				style={{height: '40%'}}
				source={require('../../../../../../assets/atti/register/back.png')}
			/>
		</BackButtonContainer>
		<HeaderTitle>
			<Title style={{color: primaryColor, fontWeight: 'bold'}}>도움말</Title>
		</HeaderTitle>
	</Header>

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

const PageWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${backgroundColor};
`

const Header = styled.View`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;
  height: 60px;
`

const HeaderTitle = styled.View`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`

const BackButtonContainer = styled.TouchableOpacity`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  left: 20px;
  height: 100%;
`

export default Help
