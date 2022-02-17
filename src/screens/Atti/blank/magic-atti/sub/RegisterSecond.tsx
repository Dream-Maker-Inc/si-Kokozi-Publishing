import React from 'react'
import {Image, StatusBar} from 'react-native'
import {backgroundColor, primaryColor} from '../../../../../common/Colors'
import styled from '@emotion/native'
import {Button, Caption, Paragraph, TextInput} from 'react-native-paper'
import HeaderClose from '../../../../../components/header/HeaderClose'

const RegisterSecond = () => <PageWrapper>
	<HeaderClose title="매직 아띠 등록"/>
	<Body>
		<Image
			resizeMode="contain"
			source={require('../../../../../../assets/atti/register/step2.png')}
		/>
		<Image
			style={{marginTop: 40}}
			resizeMode="contain"
			source={require('../../../../../../assets/atti/register/title2.png')}
		/>
		<Image
			style={{height: 260, marginTop: 100}}
			resizeMode="center"
			source={require('../../../../../../assets/atti/register/image2.png')}
		/>
		<Caption
			style={{
				width: '100%',
				textAlign: 'left',
				marginLeft: 30
			}}
		>매직아띠 이름</Caption>
		<TextInput
			style={{
				width: '94%',
				height: 50,
				borderRadius: 20
			}}
			mode="outlined"
			placeholder="공백 포함 8자"
		/>
		<ConfirmButton mode="contained">
			<Paragraph
				style={{
					color: 'white',
					fontWeight: 'bold',
					fontSize: 20
				}}
			> 매직아띠 등록 </Paragraph>
		</ConfirmButton>
	</Body>

	<StatusBar barStyle="dark-content" backgroundColor={backgroundColor}/>
</PageWrapper>

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
  width: 94%;
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${primaryColor};
  border-radius: 10px;
`

export default RegisterSecond
