import React from 'react'
import {Image, StatusBar, TouchableOpacity} from 'react-native'
import {backgroundColor, primaryColor} from '../../../../../common/Colors'
import styled from '@emotion/native'
import {Button, Paragraph} from 'react-native-paper'
import HeaderClose from '../../../../../components/header/HeaderClose'

const RegisterSuccess = () => <PageWrapper>
	<HeaderClose title="매직 아띠 등록"/>
	<Body>
		<Image
			resizeMode="contain"
			source={require('../../../../../../assets/atti/register/success-step.png')}
		/>
		<Image
			style={{marginTop: 40, width: '50%'}}
			resizeMode="contain"
			source={require('../../../../../../assets/atti/register/success-text.png')}
		/>
		<Image
			style={{height: 260, marginTop: 100, marginBottom: 100}}
			resizeMode="contain"
			source={require('../../../../../../assets/atti/register/success-image.png')}
		/>
		<Button
			style={{
				width: '94%',
				marginTop: 20,
				paddingTop: 10,
				paddingBottom: 10,
				backgroundColor: primaryColor,
				borderRadius: 10,
			}}
			mode="contained">
			<Paragraph
				style={{
					color: 'white',
					fontWeight: 'bold',
					fontSize: 20
				}}
			> 플레이리스트 만들기 </Paragraph>
		</Button>
		<TouchableOpacity style={{marginTop: 20}}>
			<Paragraph
				style={{
					color: primaryColor,
					fontWeight: 'bold'
				}}
			>나중에 할게요</Paragraph>
		</TouchableOpacity>
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

export default RegisterSuccess
