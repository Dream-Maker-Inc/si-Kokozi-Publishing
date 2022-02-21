import React from 'react'
import styled from '@emotion/native'
import {Caption} from 'react-native-paper'
import {SafeAreaView, StatusBar, TouchableOpacity} from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import IconHeaderCloseDark from '../../components/header/dark/IconHeaderCloseDark'
import {BeigeSecondColor, textCaptionColor} from '../../common/Colors'
import FilledButton from '../../components/buttons/filled/FilledButton'

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
	<FilledButton backgroundColor={'green'} text={'로그인 또는 회원가입'}/>
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