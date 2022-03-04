import React from 'react'
import styled from '@emotion/native'
import {Text} from 'react-native'
import {BeigeSecondColor, primaryColor} from '../../../../../common/Colors'
import {StepperFirst} from '../../../../../components/global/stepper/Stepper'
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

const ScreenText = styled(AutoHeightImage)`
  margin-top: 40px;
`

const ScreenImage = styled(AutoHeightImage)`
  margin-top: 100px;
`

const CaptionText = styled(Text)`
  margin-top: 140px;
  font-weight: bold;
  color: ${primaryColor};
`

const RegisterFirst = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" title="매직 아띠 등록" right="close"/>
		<Body>
			<StepperFirst marginTop={16}/>
			<ScreenText width={304} source={ImagePaths.arti.register.putIn.text}/>
			<ScreenImage width={328} source={ImagePaths.arti.register.putIn.image}/>
			<CaptionText> 도움이 필요해요 </CaptionText>
		</Body>
	</PageWrapper>

export default RegisterFirst
