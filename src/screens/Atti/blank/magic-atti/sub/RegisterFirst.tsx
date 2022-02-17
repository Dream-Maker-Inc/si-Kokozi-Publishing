import React from 'react'
import styled from '@emotion/native'
import {Image, StatusBar} from 'react-native'
import {Subheading} from 'react-native-paper'

import {backgroundColor, primaryColor} from '../../../../../common/Colors'
import HeaderClose from '../../../../../components/header/HeaderClose'

const PageWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${backgroundColor};
`

const Body = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
`

const TitleText = styled.Image`
  margin-top: 40px;
`

const TitleImage = styled.Image`
  height: 260px;
  margin-top: 100px;
`

const SubHeadingText = styled(Subheading)`
  margin-top: 140px;
  color: ${primaryColor};
  font-weight: bold;
`

const RegisterFirst = () => <PageWrapper>
	<HeaderClose title="매직 아띠 등록"/>
	<Body>
		<Image
			resizeMode="contain"
			source={require('../../../../../../assets/atti/register/step1.png')}
		/>
		<TitleText
			resizeMode="contain"
			source={require('../../../../../../assets/atti/register/title1.png')}
		/>
		<TitleImage
			resizeMode="center"
			source={require('../../../../../../assets/atti/register/image1.png')}
		/>
		<SubHeadingText> 도움이 필요해요 </SubHeadingText>
	</Body>

	<StatusBar barStyle="dark-content" backgroundColor={backgroundColor}/>
</PageWrapper>

export default RegisterFirst
