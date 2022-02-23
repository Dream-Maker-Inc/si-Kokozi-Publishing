import React from 'react'
import styled from '@emotion/native'
import {Text, TouchableOpacity} from 'react-native'
import ImagePaths from '../../../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeSecondColor, primaryColor} from '../../../../../../common/Colors'
import {StepperFirst} from '../../../../../../components/global/stepper/Stepper'
import CustomHeader from '../../../../../../components/global/header/CustomHeader'

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
  font-size: 16px;
  color: white;
`

const CannotFind = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" title="매직 아띠 등록" right="close"/>

		<Body>
			<StepperFirst marginTop={16} marginBottom={32}/>
			<AutoHeightImage width={256} source={ImagePaths.arti.register.error.cannotFind.text}/>
			<ScreenImage width={328} source={ImagePaths.arti.register.putIn.image}/>
			<ConfirmButton>
				<ButtonText>올렸어요</ButtonText>
			</ConfirmButton>
		</Body>

	</PageWrapper>

export default CannotFind
