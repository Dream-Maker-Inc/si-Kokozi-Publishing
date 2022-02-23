import React from 'react'
import styled from '@emotion/native'
import {SafeAreaView, Text} from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../../common/ImagePaths'
import {BeigeSecondColor, primaryColor} from '../../../../common/Colors'
import {StepperThird} from '../../../../components/global/stepper/Stepper'
import CustomHeader from '../../../../components/global/header/CustomHeader'

const PageWrapper = styled(SafeAreaView)`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ScreenTitle = styled(AutoHeightImage)`
  margin: 16px;
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

const ConnectionComplete = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="코코지 하우스 세팅" right="close"/>

		<StepperThird marginTop={16} marginBottom={16}/>
		<ScreenTitle width={176} source={ImagePaths.kokoziHouse.firstSetting.setting.connectionComplete.text}/>
		<ScreenImage width={240} source={ImagePaths.kokoziHouse.firstSetting.apConnect.finish.image}/>

		<SubmitButton>
			<ButtonText>다음</ButtonText>
		</SubmitButton>
	</PageWrapper>

export default ConnectionComplete