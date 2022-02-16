import React from 'react'
import {Image, StatusBar} from 'react-native'
import {backgroundColor, primaryColor} from '../../../../../common/Colors'
import styled from '@emotion/native'
import {Button, Caption, Paragraph, TextInput} from 'react-native-paper'

const RegisterSecond = () => <PageWrapper>
	<Header>
		<HeaderTitle>
			<TitleText>매직아띠 등록</TitleText>
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
			> 매직아띠 등록 </Paragraph>
		</Button>
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

export default RegisterSecond
