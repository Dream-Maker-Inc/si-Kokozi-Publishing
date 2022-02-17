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

const RegisterFirst = () => <PageWrapper>
	<HeaderClose title="매직 아띠 등록"/>
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
		<Subheading style={{marginTop: 140, color: primaryColor, fontWeight: 'bold'}}> 도움이 필요해요 </Subheading>
	</Body>

	<StatusBar barStyle="dark-content" backgroundColor={backgroundColor}/>
</PageWrapper>

export default RegisterFirst
