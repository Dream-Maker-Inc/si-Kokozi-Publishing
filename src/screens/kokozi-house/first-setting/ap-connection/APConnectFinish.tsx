import React from 'react'
import styled from '@emotion/native'
import {SafeAreaView, StatusBar, Text} from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../../common/ImagePaths'
import {BeigeSecondColor, primaryColor} from '../../../../common/Colors'
import {StepperSecond} from '../../../../components/global/stepper/Stepper'
import HeaderBackCloseDark from '../../../../components/global/header/dark/HeaderBackCloseDark'

const PageWrapper = styled(SafeAreaView)`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ScreenImage = styled(AutoHeightImage)`
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

const ButtonText = styled(Text)`
  color: white;
  font-weight: bold;
  font-size: 16px;
`

const CaptionText = styled(Text)`
  position: absolute;
  font-size: 16px;
  bottom: 47px;
  color: ${primaryColor};
`

const APConnectFinish = () =>
	<PageWrapper>
		<HeaderBackCloseDark title={'코코지 하우스 세팅'}/>
		<StepperSecond marginTop={16}/>
		<ScreenImage width={178} source={ImagePaths.kokoziHouse.firstSetting.apConnect.finish.text}/>
		<ScreenImage width={240} source={ImagePaths.kokoziHouse.firstSetting.apConnect.finish.image}/>

		<SubmitButton>
			<ButtonText>다음</ButtonText>
		</SubmitButton>

		<CaptionText>도움이 필요해요</CaptionText>
		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>

export default APConnectFinish