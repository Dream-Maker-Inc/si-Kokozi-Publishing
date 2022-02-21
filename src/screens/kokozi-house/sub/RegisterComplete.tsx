import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import styled from '@emotion/native'
import AutoHeightImage from 'react-native-auto-height-image'
import {Paragraph} from 'react-native-paper'
import {BeigeSecondColor, primaryColor, textDarkColor} from '../../../common/Colors'
import HeaderCloseLight from '../../../components/header/light/HeaderCloseLight'
import {StepperThird} from '../../../components/stepper/Stepper'

const PageWrapper = styled(SafeAreaView)`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const TitleImage = styled(AutoHeightImage)`
  margin-top: 32px;
  margin-bottom: 16px;
`

const HouseName = styled(Paragraph)`
  color: ${textDarkColor};
  font-size: 16px;
`

const TextMark = styled(Paragraph)`
  color: ${textDarkColor};
  font-size: 16px;
  font-weight: bold;
`

const Picture = styled(AutoHeightImage)`
  margin-top: 64px;
`

const SubmitButton = styled.TouchableOpacity`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 90%;
  height: 48px;

  bottom: 34px;
  left: 5%;
  right: 5%;

  border-radius: 8px;
  background-color: ${primaryColor};
`

const ButtonText = styled(Paragraph)`
  color: white;
  font-weight: bold;
  font-size: 16px;
`

const RegisterComplete = () =>
	<PageWrapper>
		<HeaderCloseLight title={'코코지 하우스 세팅'}/>
		<StepperThird marginTop={32} marginBottom={16}/>
		<TitleImage
			source={require('../../../../assets/kokozi-house/complete/text.png')}
			width={112}
		/>
		<HouseName>코코지 하우스 이름: <TextMark>코코지 하우스</TextMark></HouseName>

		<Picture
			source={require('../../../../assets/kokozi-house/initialize/ap-connect/finish/image.png')}
			width={240}
		/>

		<SubmitButton>
			<ButtonText>아따 맞이하러 가기</ButtonText>
		</SubmitButton>

		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>

export default RegisterComplete