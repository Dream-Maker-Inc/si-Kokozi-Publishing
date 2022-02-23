import React from 'react'
import styled from '@emotion/native'
import AutoHeightImage from 'react-native-auto-height-image'
import {SafeAreaView, StatusBar, TouchableOpacity, View} from 'react-native'
import {Caption, Paragraph} from 'react-native-paper'
import ImagePaths from '../../../../common/ImagePaths'
import {StepperThird} from '../../../../components/global/stepper/Stepper'
import HeaderBackCloseLight from '../../../../components/global/header/light/HeaderBackCloseLight'
import {BeigeFifthColor, BeigeSecondColor, BeigeThirdColor, primaryColor} from '../../../../common/Colors'
import RenderInput from '../../../../components/sub/kokozi-house/first-setting/kids/RenderInput'

const PageWrapper = styled(SafeAreaView)`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ScreenText = styled(AutoHeightImage)`
  margin-top: 16px;
  margin-bottom: 44px;
`

const CaptionText = styled(Caption)`
  margin-top: 112px;
  font-size: 12px;
  color: ${BeigeFifthColor};
`

const ConfirmButtonContainer = styled(View)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  bottom: 0;
  height: 90px;
  border-top-width: 1px;
  border-top-color: ${BeigeThirdColor};
`

const ConfirmButton = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 48px;
  background-color: ${primaryColor};
  border-radius: 8px;
`

const ButtonText = styled(Paragraph)`
  width: 100%;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`

const renderFooter = <>
	<CaptionText>
		{`아이의 생년월일을 입력하면 앱에서 보다 정확하게
		아이의 연령에 맞는 콘텐츠와 기능을 제공합니다.`}
	</CaptionText>

	<ConfirmButtonContainer>
		<ConfirmButton>
			<ButtonText>완료</ButtonText>
		</ConfirmButton>
	</ConfirmButtonContainer>
</>


const Kids = () => {

	return <PageWrapper>
		<HeaderBackCloseLight title={'아이 정보 등록'}/>

		<StepperThird marginTop={16}/>
		<ScreenText width={196} source={ImagePaths.kokoziHouse.firstSetting.kids.text}/>
		<RenderInput/>

		{renderFooter}
		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>
}

export default Kids