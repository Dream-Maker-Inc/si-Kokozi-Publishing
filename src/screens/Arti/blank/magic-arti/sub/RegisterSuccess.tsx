import React from 'react'
import styled from '@emotion/native'
import {Text, TouchableOpacity} from 'react-native'
import {BeigeSecondColor, primaryColor} from '../../../../../common/Colors'
import {StepperThird} from '../../../../../components/global/stepper/Stepper'
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
  margin-bottom: 140px;
`

const ConfirmButton = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 94%;
  height: 48px;
  background-color: ${primaryColor};
  border-radius: 8px;
`

const ButtonText = styled(Text)`
  color: white;
  font-weight: bold;
  font-size: 16px;
`

const CaptionView = styled(TouchableOpacity)`
  margin-top: 20px;
`

const CaptionText = styled(Text)`
  color: ${primaryColor};
  font-weight: bold;
`

const RegisterSuccess = () => <PageWrapper>
	<CustomHeader statusBarColor="dark" title="매직아띠 등록" right="close"/>
	<Body>
		<StepperThird marginTop={16} marginBottom={32}/>
		<AutoHeightImage width={152} source={ImagePaths.arti.register.success.text}/>
		<ScreenImage width={156} source={ImagePaths.arti.register.success.image}/>
		<ConfirmButton>
			<ButtonText> 플레이리스트 만들기 </ButtonText>
		</ConfirmButton>
		<CaptionView>
			<CaptionText>나중에 할게요</CaptionText>
		</CaptionView>
	</Body>
</PageWrapper>

export default RegisterSuccess
