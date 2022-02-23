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

const TitleImage = styled(AutoHeightImage)`
  margin-top: 16px;
  margin-bottom: 117px;
`

const HelpText = styled(Text)`
  position: absolute;
  bottom: 47px;
  font-size: 16px;
  color: ${primaryColor};
`

const ConnectProcess = () =>
	<PageWrapper>
		<HeaderBackCloseDark title={'코코지 하우스 세팅'}/>
		<StepperSecond marginTop={16} marginBottom={16}/>

		<TitleImage width={152} source={ImagePaths.kokoziHouse.wifi.process.text}/>
		<AutoHeightImage width={240} source={ImagePaths.kokoziHouse.wifi.process.image}/>

		<HelpText>도움이 필요해요</HelpText>
		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>

export default ConnectProcess