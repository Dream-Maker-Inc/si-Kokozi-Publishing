import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import styled from '@emotion/native'
import {BeigeSecondColor, primaryColor} from '../../../../common/Colors'
import HeaderCloseLight from '../../../../components/header/light/HeaderCloseLight'
import AutoHeightImage from 'react-native-auto-height-image'
import {Paragraph} from 'react-native-paper'

const PageWrapper = styled(SafeAreaView)`
  position: relative;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const TitleText = styled(AutoHeightImage)`
  margin: 32px auto;
`

const TitleImage = styled(AutoHeightImage)`
  margin: 0 auto;
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

const SettingStart = () =>
	<PageWrapper>
		<HeaderCloseLight title="코코지 하우스 세팅"/>

		<TitleText
			width={177}
			source={require('../../../../../assets/kokozi-house/initialize/setting/start/text.png')}
		/>

		<TitleImage
			width={320}
			source={require('../../../../../assets/kokozi-house/initialize/setting/start/image.png')}
		/>

		<SubmitButton>
			<ButtonText>시작하기</ButtonText>
		</SubmitButton>

		<StatusBar
			barStyle="dark-content"
			backgroundColor={BeigeSecondColor}
		/>
	</PageWrapper>

export default SettingStart