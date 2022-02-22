import React from 'react'
import {SafeAreaView, StatusBar, View} from 'react-native'
import styled from '@emotion/native'
import {BeigeSecondColor, placeholderTextColor, textCaptionColor, textDarkColor} from '../../../common/Colors'
import HeaderBackDark from '../../../components/header/dark/HeaderBackDark'
import {Caption, Paragraph, Title} from 'react-native-paper'
import AutoHeightImage from 'react-native-auto-height-image'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const VersionInformationWrapper = styled.View`
  width: 100%;
  padding: 20px;
`

const InformationContainer = styled.View`
  display: flex;
  align-items: center;
  margin-top: 32px;
`

const TitleText = styled(Title)`
  font-size: 17px;
  font-weight: bold;
  color: ${textDarkColor};
`

const VersionTitle = styled(Title)`
  font-size: 16px;
  font-weight: bold;
  color: ${textDarkColor};
`

const VersionCode = styled(Caption)`
  font-size: 13px;
  font-weight: bold;
  color: ${textDarkColor};
`

const VersionCaption = styled(Caption)`
  font-size: 12px;
  font-weight: bold;
  color: ${textCaptionColor};
`

const Divider = styled(View)`
  width: 90%;
  height: 1px;
  margin: 12px auto 32px;
  background-color: ${placeholderTextColor};
`

const ModelInformationWrapper = styled(View)`
  display: flex;
  padding: 0 20px;
`

const ModelInformationContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`

const ModelParagraph = styled(Paragraph)`
  font-size: 14px;
  font-weight: bold;
  color: ${textDarkColor};
`

const renderVersionInformation =
	<VersionInformationWrapper>
		<TitleText>버전 정보 확인하기</TitleText>
		<InformationContainer>
			<AutoHeightImage
				source={require('../../../../assets/mypage/information/image.png')}
				width={50}
			/>
			<VersionTitle>코코지 하우스</VersionTitle>
			<VersionCode>Version 1.0.3</VersionCode>
			<VersionCaption>현재 최신 버전을 사용 중이에요</VersionCaption>
		</InformationContainer>
	</VersionInformationWrapper>

const renderModelInformation =
	<ModelInformationWrapper>
		<TitleText>모델명 확인하기</TitleText>
		<ModelInformationContainer>
			<ModelParagraph>코코지 하우스 모델명</ModelParagraph>
			<ModelParagraph>KKZHSE1A</ModelParagraph>
		</ModelInformationContainer>
	</ModelInformationWrapper>

const HouseVersion = () =>
	<PageWrapper>
		<HeaderBackDark title={'코코지 하우스 정보'}/>
		{renderVersionInformation}
		<Divider/>
		{renderModelInformation}
		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>

export default HouseVersion