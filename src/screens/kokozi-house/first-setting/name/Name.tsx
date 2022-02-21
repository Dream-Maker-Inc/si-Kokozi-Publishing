import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import styled from '@emotion/native'
import {BeigeForthColor, BeigeSecondColor, primaryColor} from '../../../../common/Colors'
import HeaderCloseLight from '../../../../components/header/light/HeaderCloseLight'
import AutoHeightImage from 'react-native-auto-height-image'
import {Caption, Paragraph, TextInput} from 'react-native-paper'
import {StepperThird} from '../../../../components/stepper/Stepper'

const PageWrapper = styled(SafeAreaView)`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const StepperImage = styled(AutoHeightImage)`
  margin: 16px;
`

const TitleText = styled(AutoHeightImage)`
  margin: 16px;
`

const ScreenImage = styled(AutoHeightImage)`
  margin-top: 26px;
`

const CaptionText = styled(Caption)`
  width: 100%;
  text-align: left;
  margin-left: 30px;
  color: #908579;
  font-weight: bold;
`

const NameInput = styled(TextInput)`
  width: 94%;
  height: 50px;
  border-radius: 20px;
  background-color: transparent;
`

const SubmitButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 94%;
  height: 48px;

  margin-top: 16px;

  border-radius: 8px;
  background-color: ${primaryColor};
`

const ButtonText = styled(Paragraph)`
  color: white;
  font-weight: bold;
  font-size: 16px;
`

const Name = () =>
	<PageWrapper>
		<HeaderCloseLight title={'코코지 하우스 세팅'}/>

		<StepperThird marginTop={16} marginBottom={16}/>
		<TitleText
			source={require('../../../../../assets/kokozi-house/initialize/name/text.png')}
			width={252}
		/>
		<ScreenImage
			source={require('../../../../../assets/kokozi-house/initialize/name/image.png')}
			width={240}
		/>

		<CaptionText>코코지 하우스 이름</CaptionText>
		<NameInput
			mode="outlined"
			placeholder="공백 포함 8자"
			activeOutlineColor={BeigeForthColor}
			placeholderTextColor={BeigeForthColor}
		/>

		<SubmitButton>
			<ButtonText>다음</ButtonText>
		</SubmitButton>

		<StatusBar
			barStyle="dark-content"
			backgroundColor={BeigeSecondColor}
		/>
	</PageWrapper>

export default Name