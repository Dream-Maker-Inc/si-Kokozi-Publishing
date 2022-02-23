import React from 'react'
import styled from '@emotion/native'
import ImagePaths from '../../../common/ImagePaths'
import {BeigeSecondColor} from '../../../common/Colors'
import {SafeAreaView, View} from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import {StepperThird} from '../../../components/global/stepper/Stepper'
import FilledButton from '../../../components/global/buttons/filled/FilledButton'
import CustomHeader from '../../../components/global/header/CustomHeader'

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

const IllegalProduct = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="코코지 하우스 세팅" right="close"/>
		<StepperThird marginTop={16} marginBottom={32}/>
		<AutoHeightImage width={224} source={ImagePaths.kokoziHouse.settingEtc.illegalProduct.text}/>
		<ScreenImage width={284} source={ImagePaths.kokoziHouse.settingEtc.illegalProduct.image}/>
		<BottomContainer>
			<FilledButton backgroundColor={'green'} text={'다음'}/>
		</BottomContainer>
	</PageWrapper>

export default IllegalProduct