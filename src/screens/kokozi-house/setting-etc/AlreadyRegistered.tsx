import React from 'react'
import styled from '@emotion/native'
import ImagePaths from '../../../common/ImagePaths'
import {BeigeSecondColor} from '../../../common/Colors'
import {SafeAreaView, StatusBar, View} from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import {StepperThird} from '../../../components/global/stepper/Stepper'
import FilledButton from '../../../components/global/buttons/filled/FilledButton'
import HeaderBackCloseDark from '../../../components/global/header/dark/HeaderBackCloseDark'

const PageWrapper = styled(SafeAreaView)`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ScreenImage = styled(AutoHeightImage)`
  margin-top: 38px;
`

const BottomContainer = styled(View)`
  position: absolute;
  width: 100%;
  bottom: 16px;
`

const AlreadyRegistered = () =>
	<PageWrapper>
		<HeaderBackCloseDark title="코코지 하우스 세팅"/>
		<StepperThird marginTop={16} marginBottom={24}/>
		<AutoHeightImage width={284} source={ImagePaths.kokoziHouse.settingEtc.alreadyRegistered.text}/>
		<ScreenImage width={284} source={ImagePaths.kokoziHouse.settingEtc.alreadyRegistered.image}/>
		<BottomContainer>
			<FilledButton backgroundColor={'green'} text={'다음'}/>
		</BottomContainer>
		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>

export default AlreadyRegistered