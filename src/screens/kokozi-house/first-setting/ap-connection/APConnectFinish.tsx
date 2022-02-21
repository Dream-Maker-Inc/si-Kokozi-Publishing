import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import styled from '@emotion/native'
import HeaderBackCloseDark from '../../../../components/header/dark/HeaderBackCloseDark'
import {BeigeSecondColor, primaryColor} from '../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import {Caption, Paragraph} from 'react-native-paper'
import {StepperSecond} from '../../../../components/stepper/Stepper'

const PageWrapper = styled(SafeAreaView)`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const TitleText = styled(AutoHeightImage)`
  margin-top: 32px;
`

const SubmitButton = styled.TouchableOpacity`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 90%;
  height: 48px;

  bottom: 90px;
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

const CaptionText = styled(Caption)`
  position: absolute;
  bottom: 47px;
  color: ${primaryColor};
  font-size: 16px;
`

const APConnectFinish = () =>
	<PageWrapper>
		<HeaderBackCloseDark title={'코코지 하우스 세팅'}/>
		<StepperSecond marginTop={16}/>
		<TitleText
			source={require('../../../../../assets/kokozi-house/initialize/ap-connect/finish/text.png')}
			width={178}
		/>
		<TitleText
			source={require('../../../../../assets/kokozi-house/initialize/ap-connect/finish/image.png')}
			width={240}
		/>

		<SubmitButton>
			<ButtonText>다음</ButtonText>
		</SubmitButton>

		<CaptionText>도움이 필요해요</CaptionText>

		<StatusBar
			barStyle="dark-content"
			backgroundColor={BeigeSecondColor}
		/>
	</PageWrapper>

export default APConnectFinish