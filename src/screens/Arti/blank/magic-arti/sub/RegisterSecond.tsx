import React from 'react'
import styled from '@emotion/native'
import {Text, TouchableOpacity} from 'react-native'
import {TextInput} from 'react-native-paper'
import {BeigeFifthColor, BeigeForthColor, BeigeSecondColor, primaryColor} from '../../../../../common/Colors'
import {StepperSecond} from '../../../../../components/global/stepper/Stepper'
import ImagePaths from '../../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import CustomHeader from '../../../../../components/global/header/CustomHeader'

const PageWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const Body = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  flex: 1;
`

const ScreenImage = styled(AutoHeightImage)`
  margin-top: 100px;
`

const CaptionText = styled(Text)`
  width: 100%;
  text-align: left;
  margin-top: 112px;
  margin-left: 30px;
  color: ${BeigeFifthColor};
`

const NameInput = styled(TextInput)`
  width: 94%;
  height: 50px;
  background-color: transparent;
`

const ConfirmButton = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 94%;
  height: 50px;
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${primaryColor};
  border-radius: 10px;
`

const ButtonText = styled(Text)`
  color: white;
  font-weight: bold;
  font-size: 16px;
`

const RegisterSecond = () => <PageWrapper>
	<CustomHeader statusBarColor="dark" title="매직아띠 등록" right="close"/>
	<Body>
		<StepperSecond marginTop={16} marginBottom={32}/>
		<AutoHeightImage width={328} source={ImagePaths.arti.register.name.text}/>
		<ScreenImage width={124} source={ImagePaths.arti.register.name.image}/>

		<CaptionText>매직아띠 이름</CaptionText>
		<NameInput
			mode="outlined"
			placeholder="공백 포함 8자"
			outlineColor={BeigeForthColor}
			activeOutlineColor={BeigeForthColor}
			placeholderTextColor={BeigeForthColor}
		/>
		<ConfirmButton>
			<ButtonText> 매직아띠 등록 </ButtonText>
		</ConfirmButton>
	</Body>
</PageWrapper>

export default RegisterSecond
