import React from 'react'
import styled from '@emotion/native'
import {Paragraph} from 'react-native-paper'
import {SafeAreaView, StatusBar} from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeSecondColor, primaryColor} from '../../../../common/Colors'
import HeaderBackCloseDark from '../../../../components/global/header/dark/HeaderBackCloseDark'
import {StepperFirst} from '../../../../components/global/stepper/Stepper'
import ImagePaths from '../../../../common/ImagePaths'

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
		<TitleText width={228} source={ImagePaths.kokoziHouse.firstSetting.apConnect.start.text}/>
		<TitleText width={255} source={ImagePaths.kokoziHouse.firstSetting.apConnect.start.image}/>

		<SubmitButton>
			<ButtonText>다음</ButtonText>
		</SubmitButton>

		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>

export default APConnectStart