import React from 'react'
import {Image, StatusBar, TouchableOpacity} from 'react-native'
import {BeigeSecondColor, primaryColor} from '../../../../../common/Colors'
import styled from '@emotion/native'
import {Button, Paragraph} from 'react-native-paper'
import HeaderCloseLight from '../../../../../components/header/light/HeaderCloseLight'

const PageWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const Body = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
`

const SuccessText = styled.Image`
  margin-top: 40px;
  width: 50%;
`

const SuccessImage = styled.Image`
  height: 260px;
  margin-top: 100px;
  margin-bottom: 100px;
`

const ConfirmButton = styled(Button)`
  width: 94%;
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${primaryColor};
  border-radius: 10px;
`

const ButtonText = styled(Paragraph)`
  color: white;
  font-weight: bold;
  font-size: 20px;
`

const CaptionView = styled(TouchableOpacity)`
  margin-top: 20px;
`

const CaptionText = styled(Paragraph)`
  color: ${primaryColor};
  font-weight: bold;
`

const RegisterSuccess = () => <PageWrapper>
	<HeaderCloseLight title="매직 아띠 등록"/>
	<Body>
		<Image
			resizeMode="contain"
			source={require('../../../../../../assets/atti/register/success-step.png')}
		/>
		<SuccessText
			resizeMode="contain"
			source={require('../../../../../../assets/atti/register/success-text.png')}
		/>
		<SuccessImage
			resizeMode="contain"
			source={require('../../../../../../assets/atti/register/success-image.png')}
		/>
		<ConfirmButton mode="contained">
			<ButtonText> 플레이리스트 만들기 </ButtonText>
		</ConfirmButton>
		<CaptionView>
			<CaptionText>나중에 할게요</CaptionText>
		</CaptionView>
	</Body>

	<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
</PageWrapper>

export default RegisterSuccess
