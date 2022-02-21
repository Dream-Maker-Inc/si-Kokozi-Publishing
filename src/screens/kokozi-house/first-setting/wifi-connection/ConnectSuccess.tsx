import React from 'react'
import styled from '@emotion/native'
import {SafeAreaView, StatusBar} from 'react-native'
import {BeigeSecondColor, primaryColor, textDarkColor} from '../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import HeaderBackCloseDark from '../../../../components/header/dark/HeaderBackCloseDark'
import {Caption, Paragraph} from 'react-native-paper'
import {StepperThird} from '../../../../components/stepper/Stepper'

const PageWrapper = styled(SafeAreaView)`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const TitleImage = styled(AutoHeightImage)`
  margin: 16px;
`

const WifiName = styled(Paragraph)`
  font-size: 16px;
  color: ${textDarkColor};
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

const ConnectSuccess = () =>
	<PageWrapper>
		<HeaderBackCloseDark title={'코코지 하우스 세팅'}/>
		<StepperThird marginTop={16} marginBottom={16}/>

		<TitleImage
			source={require('../../../../../assets/kokozi-house/wifi/complete/text.png')}
			width={176}
		/>

		<WifiName>와이파이 이름 : mywifi-2.5G</WifiName>

		<AutoHeightImage
			source={require('../../../../../assets/kokozi-house/wifi/complete/image.png')}
			width={240}
		/>

		<SubmitButton>
			<ButtonText>다음</ButtonText>
		</SubmitButton>

		<CaptionText>도움이 필요해요</CaptionText>

		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>

export default ConnectSuccess