import React from 'react'
import styled from '@emotion/native'
import {Image, StatusBar} from 'react-native'
import {Button, Headline} from 'react-native-paper'

import {backgroundColor, primaryColor} from '../../../../../../common/Colors'

import HeaderClose from '../../../../../../components/header/HeaderClose'

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

const ConfirmButton = styled(Button)`
  margin-top: 140px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 10px;
  background-color: ${primaryColor};
  width: 94%;
`

const AlreadyRegistered = () => <PageWrapper>
	<HeaderClose title="매직 아띠 등록"/>
	<Body>
		<Image
			resizeMode="contain"
			source={require('../../../../../../../assets/atti/register/step1.png')}
		/>
		<Image
			style={{marginTop: 40}}
			resizeMode="contain"
			source={require('../../../../../../../assets/atti/register/error/already-registered-text.png')}
		/>
		<Image
			style={{height: 260, marginTop: 100}}
			resizeMode="center"
			source={require('../../../../../../../assets/atti/register/error/already-registered-image.png')}
		/>
		<ConfirmButton mode="contained">
			<Headline style={{color: 'white', fontWeight: 'bold'}}>올렸어요</Headline>
		</ConfirmButton>
	</Body>

	<StatusBar barStyle="dark-content" backgroundColor={backgroundColor}/>
</PageWrapper>

export default AlreadyRegistered
