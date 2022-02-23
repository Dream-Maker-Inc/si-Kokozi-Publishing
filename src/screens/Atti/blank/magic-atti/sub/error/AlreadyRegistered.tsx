import React from 'react'
import styled from '@emotion/native'
import {Text, TouchableOpacity} from 'react-native'
import {BeigeSecondColor, primaryColor} from '../../../../../../common/Colors'
import {StepperFirst} from '../../../../../../components/global/stepper/Stepper'
import ImagePaths from '../../../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import CustomHeader from '../../../../../../components/global/header/CustomHeader'

const PageWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const Body = styled.View`
  display: flex;
  align-items: center;
`

const ScreenText = styled(AutoHeightImage)`
  margin-bottom: 56px;
`

const ConfirmButton = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  margin-top: 168px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 10px;
  background-color: ${primaryColor};
  width: 94%;
`

const ButtonText = styled(Text)`
  color: white;
  font-size: 16px;
`

const AlreadyRegistered = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" title="매직 아띠 등록" right="close"/>
		<Body>
			<StepperFirst marginTop={16} marginBottom={32}/>
			<ScreenText width={312} source={ImagePaths.arti.register.error.alreadyRegistered.text}/>
			<AutoHeightImage width={328} source={ImagePaths.arti.register.error.alreadyRegistered.image}/>
			<ConfirmButton>
				<ButtonText>올렸어요</ButtonText>
			</ConfirmButton>
		</Body>
	</PageWrapper>

export default AlreadyRegistered
