import React from 'react'
import {StatusBar} from 'react-native'
import {BeigeForthColor, BeigeSecondColor, primaryColor} from '../../../../../common/Colors'
import styled from '@emotion/native'
import {Button, Caption, Paragraph, TextInput} from 'react-native-paper'
import HeaderCloseLight from '../../../../../components/header/light/HeaderCloseLight'
import {StepperSecond} from '../../../../../components/stepper/Stepper'

const PageWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${BeigeSecondColor};
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
	<HeaderCloseLight title="매직 아띠 등록"/>
	<Body>
		<StepperSecond/>
		<TitleText
			resizeMode="contain"
			source={require('../../../../../../assets/atti/register/name/title2.png')}
		/>
		<TitleImage
			resizeMode="center"
			source={require('../../../../../../assets/atti/register/name/image2.png')}
		/>
		<CaptionText>매직아띠 이름</CaptionText>
		<Input
			mode="outlined"
			placeholder="공백 포함 8자"
			activeOutlineColor={BeigeForthColor}
			placeholderTextColor={BeigeForthColor}
		/>
		<ConfirmButton mode="contained">
			<ButtonText> 매직아띠 등록 </ButtonText>
		</ConfirmButton>
	</Body>

	<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
</PageWrapper>

export default RegisterSecond
