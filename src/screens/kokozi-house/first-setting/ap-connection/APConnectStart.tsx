import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import styled from '@emotion/native'
import HeaderBackCloseDark from '../../../../components/header/dark/HeaderBackCloseDark'
import {BeigeSecondColor, primaryColor} from '../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import {Paragraph} from 'react-native-paper'
import {StepperFirst} from '../../../../components/stepper/Stepper'

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

const APConnectStart = () =>
	<PageWrapper>
		<HeaderBackCloseDark title={'코코지 하우스 세팅'}/>
		<StepperFirst marginTop={16}/>
		<TitleText
			source={require('../../../../../assets/kokozi-house/initialize/ap-connect/start/text.png')}
			width={228}
		/>
		<TitleText
			source={require('../../../../../assets/kokozi-house/initialize/ap-connect/start/image.png')}
			width={255}
		/>

		<SubmitButton>
			<ButtonText>다음</ButtonText>
		</SubmitButton>

		<StatusBar
			barStyle="dark-content"
			backgroundColor={BeigeSecondColor}
		/>
	</PageWrapper>

export default APConnectStart