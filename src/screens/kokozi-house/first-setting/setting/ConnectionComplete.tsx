import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import styled from '@emotion/native'
import {BeigeSecondColor, primaryColor} from '../../../../common/Colors'
import HeaderBackCloseDark from '../../../../components/header/dark/HeaderBackCloseDark'
import AutoHeightImage from 'react-native-auto-height-image'
import {Paragraph} from 'react-native-paper'

const PageWrapper = styled(SafeAreaView)`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ProcessImage = styled(AutoHeightImage)`
  margin: 16px;
`

const TitleImage = styled(AutoHeightImage)`
  margin: 16px;
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

const ConnectionComplete = () =>
	<PageWrapper>
		<HeaderBackCloseDark title={'코코지 하우스 세팅'}/>

		<ProcessImage
			source={require('../../../../../assets/components/stepper/step-3.png')}
			width={84}
		/>

		<TitleImage
			source={require('../../../../../assets/kokozi-house/initialize/setting/connection-complete/text.png')}
			width={176}
		/>
		<Picture
			source={require('../../../../../assets/kokozi-house/initialize/ap-connect/finish/image.png')}
			width={240}
		/>

		<SubmitButton>
			<ButtonText>다음</ButtonText>
		</SubmitButton>

		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>

export default ConnectionComplete