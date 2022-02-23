import React from 'react'
import styled from '@emotion/native'
import {SafeAreaView, Text} from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeSecondColor, navyColor, primaryColor} from '../../../common/Colors'
import {StepperThird} from '../../../components/global/stepper/Stepper'
import ImagePaths from '../../../common/ImagePaths'
import CustomHeader from '../../../components/global/header/CustomHeader'

const PageWrapper = styled(SafeAreaView)`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ScreenTitle = styled(AutoHeightImage)`
  margin-top: 32px;
  margin-bottom: 16px;
`

const HouseName = styled(Text)`
  color: ${navyColor};
  font-size: 16px;
`

const TextMark = styled(Text)`
  color: ${navyColor};
  font-size: 16px;
  font-weight: bold;
`

const ScreenImage = styled(AutoHeightImage)`
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

const ButtonText = styled(Text)`
  color: white;
  font-weight: bold;
  font-size: 16px;
`

const RegisterComplete = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" title="코코지 하우스 세팅" right="close"/>
		<StepperThird marginTop={32} marginBottom={16}/>
		<ScreenTitle width={112} source={ImagePaths.kokoziHouse.complete.text}/>

		<HouseName>코코지 하우스 이름: <TextMark>코코지 하우스</TextMark></HouseName>
		<ScreenImage width={240} source={ImagePaths.kokoziHouse.firstSetting.apConnect.finish.image}/>

		<SubmitButton>
			<ButtonText>아따 맞이하러 가기</ButtonText>
		</SubmitButton>
	</PageWrapper>

export default RegisterComplete