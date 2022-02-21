import React from 'react'
import {ScrollView, StatusBar} from 'react-native'
import styled from '@emotion/native'
import {Caption, Divider, Subheading, Title} from 'react-native-paper'
import {BeigeSecondColor, textCaptionColor, textDarkColor} from '../../common/Colors'
import HeaderBackDark from '../../components/header/dark/HeaderBackDark'

const PageWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ViewContainer = styled.View`
  margin: 30px;
`

const CaptionText = styled(Caption)`
  color: ${textCaptionColor};
`

const TitleText = styled(Title)`
  font-size: 16px;
  font-weight: bold;
  color: ${textDarkColor};
`

const HelpImage = styled.Image`
  width: 100%;
  height: 500px;
  margin-top: 24px;
`

const Help = () => <PageWrapper>
	<HeaderBackDark title="도움말"/>

	<ScrollView>
		<ViewContainer>
			<CaptionText>게스트 관리</CaptionText>
			<TitleText>[코코지 하우스 LED 불빛] 코코지 하우스 다락방에서 나오는 불빛의 의미는 무엇인가요?</TitleText>
		</ViewContainer>

		<Divider/>

		<ViewContainer>
			<Subheading>불빛은 코코지 하우스의 상태를 알려줘요.</Subheading>
			<Subheading>불빛의 의미는 다음과 같아요.</Subheading>
			<HelpImage
				resizeMode="contain"
				source={require('../../../assets/kokozi-house/help.png')}
			/>
		</ViewContainer>
	</ScrollView>

	<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
</PageWrapper>

export default Help
