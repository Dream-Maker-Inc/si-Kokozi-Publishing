import React from 'react'
import {Image, StatusBar} from 'react-native'
import {BeigeSecondColor, primaryColor} from '../../../../../../common/Colors'
import styled from '@emotion/native'
import {Button, Headline} from 'react-native-paper'
import HeaderCloseLight from '../../../../../../components/header/light/HeaderCloseLight'

const PageWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const Body = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
`

const ImageText = styled.Image`
  margin-top: 40px;
`

const ThumbImage = styled.Image`
  height: 260px;
  margin-top: 100px;
`

const ConfirmButton = styled(Button)`
  margin-top: 140px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 10px;
  background-color: ${primaryColor};
  width: 94%;
`

const HeadlineText = styled(Headline)`
  color: white;
  background-color: ${BeigeSecondColor};
`

const CannotFind = () => <PageWrapper>
	<HeaderCloseLight title="매직 아띠 등록"/>
	<Body>
		<Image
			resizeMode="contain"
			source={require('../../../../../../../assets/atti/register/step1.png')}
		/>
		<ImageText
			resizeMode="contain"
			source={require('../../../../../../../assets/atti/register/error/cannot-find-text.png')}
		/>
		<ThumbImage
			resizeMode="center"
			source={require('../../../../../../../assets/atti/register/image1.png')}
		/>
		<ConfirmButton mode="contained">
			<HeadlineText>올렸어요</HeadlineText>
		</ConfirmButton>
	</Body>

	<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
</PageWrapper>

export default CannotFind
