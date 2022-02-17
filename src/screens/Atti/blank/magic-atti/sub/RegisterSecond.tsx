import React from 'react'
import {Image, StatusBar} from 'react-native'
import {backgroundColor, primaryColor} from '../../../../../common/Colors'
import styled from '@emotion/native'
import {Button, Caption, Paragraph, TextInput} from 'react-native-paper'
import HeaderClose from '../../../../../components/header/HeaderClose'

const PageWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${backgroundColor};
`

const Body = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
`

const TitleText = styled.Image`
  margin-top: 40px;
`

const TitleImage = styled.Image`
  height: 260px;
  margin-top: 100px;
`

const CaptionText = styled(Caption)`
  width: 100%;
  text-align: left;
  margin-left: 30px;
`

const Input = styled(TextInput)`
  width: 94%;
  height: 50px;
  border-radius: 20px;
`

const ConfirmButton = styled(Button)`
  width: 94%;
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${primaryColor};
  border-radius: 10px;
`

const ButtonText = styled(Paragraph)`
  color: white;
  font-weight: bold;
  font-size: 20px;
`

const RegisterSecond = () => <PageWrapper>
	<HeaderClose title="매직 아띠 등록"/>
	<Body>
		<Image
			resizeMode="contain"
			source={require('../../../../../../assets/atti/register/step2.png')}
		/>
		<TitleText
			resizeMode="contain"
			source={require('../../../../../../assets/atti/register/title2.png')}
		/>
		<TitleImage
			resizeMode="center"
			source={require('../../../../../../assets/atti/register/image2.png')}
		/>
		<CaptionText>매직아띠 이름</CaptionText>
		<Input
			mode="outlined"
			placeholder="공백 포함 8자"
		/>
		<ConfirmButton mode="contained">
			<ButtonText> 매직아띠 등록 </ButtonText>
		</ConfirmButton>
	</Body>

	<StatusBar barStyle="dark-content" backgroundColor={backgroundColor}/>
</PageWrapper>

export default RegisterSecond
