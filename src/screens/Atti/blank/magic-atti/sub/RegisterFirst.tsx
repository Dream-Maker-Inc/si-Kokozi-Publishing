import React from 'react'
import {Image, StatusBar} from 'react-native'
import {backgroundColor, primaryColor} from '../../../../../common/Colors'
import styled from '@emotion/native'

const RegisterFirst = () => <PageWrapper>
	<Header>
		<HeaderTitle>
			<TitleText>매직 아띠 등록</TitleText>
		</HeaderTitle>
		<CloseButtonContainer>
			<CloseButton
				resizeMode="contain"
				source={require('../../../../../../assets/atti/register/close.png')}
			/>
		</CloseButtonContainer>
	</Header>

	<Body>
		<Image
			resizeMode="contain"
			source={require('../../../../../../assets/atti/register/step1.png')}
		/>
		<Image
			style={{marginTop: 40}}
			resizeMode="contain"
			source={require('../../../../../../assets/atti/register/title1.png')}
		/>
		<Image
			style={{height: 260, marginTop: 100}}
			resizeMode="center"
			source={require('../../../../../../assets/atti/register/image1.png')}
		/>
		<CaptionText> 도움이 필요해요 </CaptionText>
	</Body>

	<StatusBar barStyle="dark-content" backgroundColor={backgroundColor}/>
</PageWrapper>

const PageWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${backgroundColor};
`

const Header = styled.View`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;
  height: 60px;
`

const HeaderTitle = styled.View`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`

const TitleText = styled.Text`
  color: ${primaryColor};
  font-weight: bold;
  font-size: 20px;
`

const CloseButtonContainer = styled.TouchableOpacity`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  right: 20px;
  height: 100%;
`

const CloseButton = styled.Image`
  height: 40%;
`

const Body = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
`

const CaptionText = styled.Text`
  margin-top: 180px;
  font-size: 18px;
  text-align: center;
  color: ${primaryColor};
  font-weight: bold;
`

export default RegisterFirst
