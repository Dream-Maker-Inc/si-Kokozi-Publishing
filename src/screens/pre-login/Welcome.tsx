import React from 'react'
import styled from '@emotion/native'
import {Button, Caption, Title} from 'react-native-paper'
import {SafeAreaView, StatusBar, TouchableOpacity} from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import IconHeaderCloseDark from '../../components/header/dark/IconHeaderCloseDark'
import {BeigeSecondColor, primaryColor, textCaptionColor} from '../../common/Colors'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ImagesContainer = styled.View`
  display: flex;
  align-items: center;
`

const TitleImage = styled(AutoHeightImage)`
  margin-top: 60px;
`

const TitleText = styled(AutoHeightImage)`
  margin-top: -20px;
`

const ButtonContainer = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 32px;
`

const LoginButton = styled(Button)`
  width: 90%;
  margin: 0 auto;
  padding: 4px;
  background-color: ${primaryColor};
  border-radius: 8px;
`

const LoginText = styled(Title)`
  font-size: 16px;
  color: white;
  font-weight: bold;
`

const CaptionText = styled(Caption)`
  margin: 24px 0;
  color: ${textCaptionColor};
  font-size: 13px;
  text-align: center;
`

const SNSButtons = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`

const AppleButton = styled(AutoHeightImage)`
  margin-left: 24px;
`

const renderImages = <>
	<ImagesContainer>
		<TitleImage source={require('../../../assets/pre-login/intro/text.png')} width={200}/>
		<TitleText source={require('../../../assets/pre-login/welcome/image.png')} width={400}/>
	</ImagesContainer>
</>

const renderButton = <>
	<ButtonContainer>
		<LoginButton>
			<LoginText>로그인 또는 회원가입</LoginText>
		</LoginButton>
	</ButtonContainer>
</>

const renderSNS = <>
	<CaptionText>또는 다른 서비스 계정으로 회원가입</CaptionText>
	<SNSButtons>
		<TouchableOpacity>
			<AutoHeightImage source={require('../../../assets/components/sns/kakao.png')} width={50}/>
		</TouchableOpacity>
		<TouchableOpacity>
			<AppleButton source={require('../../../assets/components/sns/apple.png')} width={50}/>
		</TouchableOpacity>
	</SNSButtons>
</>

const Welcome = () =>
	<PageWrapper>
		<IconHeaderCloseDark/>
		{renderImages}
		{renderButton}
		{renderSNS}
		<StatusBar backgroundColor={BeigeSecondColor} barStyle="dark-content"/>
	</PageWrapper>

export default Welcome