import React from 'react'
import styled from '@emotion/native'
import {SafeAreaView, StatusBar} from 'react-native'
import {BeigeSecondColor, primaryColor} from '../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import HeaderBackCloseDark from '../../../../components/header/dark/HeaderBackCloseDark'
import {Caption} from 'react-native-paper'

const PageWrapper = styled(SafeAreaView)`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ProgressImage = styled(AutoHeightImage)`
  margin: 16px 0;
`

const TitleImage = styled(AutoHeightImage)`
  margin-top: 16px;
  margin-bottom: 117px;
`

const HelpText = styled(Caption)`
  position: absolute;
  bottom: 47px;
  font-size: 16px;
  color: ${primaryColor};
`

const ConnectProcess = () =>
	<PageWrapper>
		<HeaderBackCloseDark title={'코코지 하우스 세팅'}/>

		<ProgressImage
			source={require('../../../../../assets/components/stepper/step-2.png')}
			width={84}
		/>

		<TitleImage
			source={require('../../../../../assets/kokozi-house/wifi/process/text.png')}
			width={152}
		/>

		<AutoHeightImage
			source={require('../../../../../assets/kokozi-house/wifi/process/image.png')}
			width={240}
		/>

		<HelpText>도움이 필요해요</HelpText>

		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>

export default ConnectProcess