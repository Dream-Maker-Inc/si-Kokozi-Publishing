import React from 'react'
import styled from '@emotion/native'
import {SafeAreaView} from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import {Paragraph} from 'react-native-paper'
import ImagePaths from '../../../../common/ImagePaths'
import {StepperSecond} from '../../../../components/global/stepper/Stepper'
import {BeigeSecondColor, primaryColor} from '../../../../common/Colors'
import RenderInputContainer
	from '../../../../components/sub/kokozi-house/first-setting/wifi-connection/information/RenderInputContainer'
import CustomHeader from '../../../../components/global/header/CustomHeader'

const PageWrapper = styled(SafeAreaView)`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const TitleImage = styled(AutoHeightImage)`
  margin-top: 16px;
  margin-bottom: 32px;
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

const ButtonText = styled(Paragraph)`
  color: white;
  font-weight: bold;
  font-size: 16px;
`

const Information = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" right="close" title="코코지 하우스 세팅"/>
		<StepperSecond marginTop={16} marginBottom={16}/>
		<TitleImage width={288} source={ImagePaths.kokoziHouse.wifi.information.text}/>
		<RenderInputContainer/>

		<SubmitButton>
			<ButtonText>다음</ButtonText>
		</SubmitButton>
	</PageWrapper>

export default Information