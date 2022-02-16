import React from 'react'
import {Image, StatusBar, Text} from 'react-native'
import {backgroundColor, primaryColor} from '../../../../../../common/Colors'
import styled from '@emotion/native'
import {Button} from 'react-native-paper'

const AlreadyRegistered = () => <PageWrapper>
	<Header>
		<HeaderTitle>
			<TitleText>매직 아띠 등록</TitleText>
		</HeaderTitle>
		<CloseButtonContainer>
			<CloseButton
				resizeMode="contain"
				source={require('../../../../../../../assets/atti/register/close.png')}
			/>
		</CloseButtonContainer>
	</Header>

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
		<Button
			mode="contained"
			style={{
				marginTop: 140,
				paddingTop: 6,
				paddingBottom: 6,
				borderRadius: 10,
				backgroundColor: primaryColor,
				width: '94%',
			}}>
			<Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>올렸어요</Text>
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

const CaptionText = styled.Text`
`

export default AlreadyRegistered
