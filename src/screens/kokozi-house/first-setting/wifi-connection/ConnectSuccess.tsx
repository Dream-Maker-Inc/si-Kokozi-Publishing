import React from 'react'
import styled from '@emotion/native'
import {SafeAreaView, StatusBar, Text} from 'react-native'
import {BeigeSecondColor, navyColor, primaryColor} from '../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import HeaderBackCloseDark from '../../../../components/global/header/dark/HeaderBackCloseDark'
import {StepperSecond} from '../../../../components/global/stepper/Stepper'
import ImagePaths from '../../../../common/ImagePaths'

const PageWrapper = styled(SafeAreaView)`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ScreenImage = styled(AutoHeightImage)`
  margin: 16px;
`

const WifiName = styled(Text)`
  font-size: 16px;
  color: ${navyColor};
  margin-bottom: 77px;
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
  bottom: 47px;
  color: ${primaryColor};
  font-size: 16px;
`

const ConnectSuccess = () =>
	<PageWrapper>
		<HeaderBackCloseDark title={'코코지 하우스 세팅'}/>
		<StepperSecond marginTop={16} marginBottom={16}/>
		<ScreenImage width={176} source={ImagePaths.kokoziHouse.wifi.complete.text}/>

		<WifiName>와이파이 이름 : mywifi-2.5G</WifiName>
		<AutoHeightImage width={240} source={ImagePaths.kokoziHouse.wifi.complete.image}/>

		<SubmitButton>
			<ButtonText>다음</ButtonText>
		</SubmitButton>
		<CaptionText>도움이 필요해요</CaptionText>

		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>

export default ConnectSuccess