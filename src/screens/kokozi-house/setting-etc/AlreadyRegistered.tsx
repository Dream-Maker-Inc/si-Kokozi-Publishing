import React from 'react'
import {SafeAreaView, StatusBar, View} from 'react-native'
import styled from '@emotion/native'
import {BeigeSecondColor} from '../../../common/Colors'
import HeaderBackCloseDark from '../../../components/header/dark/HeaderBackCloseDark'
import {StepperThird} from '../../../components/stepper/Stepper'
import AutoHeightImage from 'react-native-auto-height-image'
import FilledButton from '../../../components/buttons/filled/FilledButton'

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
		<AutoHeightImage
			source={require('../../../../assets/kokozi-house/setting-etc/already-registered/text.png')}
			width={284}
		/>
		<ScreenImage
			source={require('../../../../assets/kokozi-house/setting-etc/already-registered/image.png')}
			width={284}
		/>
		<BottomContainer>
			<FilledButton backgroundColor={'green'} text={'다음'}/>
		</BottomContainer>
		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>

export default AlreadyRegistered