import React from 'react'
import styled from '@emotion/native'
import {SafeAreaView, Text} from 'react-native'
import ImagePaths from '../../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeFifthColor, BeigeSecondColor, navyColor} from '../../../../../common/Colors'

export const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const InformationWrapper = styled.View`
  width: 100%;
  padding: 20px;
`

const InformationContainer = styled.View`
  display: flex;
  align-items: center;
  margin-top: 32px;
`

export const TitleText = styled(Text)`
  font-size: 17px;
  font-weight: bold;
  color: ${navyColor};
`

const VersionTitle = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  margin-top: 16px;
  color: ${navyColor};
`

const VersionCode = styled(Text)`
  font-size: 13px;
  margin-top: 4px;
  color: ${navyColor};
`

const VersionCaption = styled(Text)`
  font-size: 12px;
  margin-top: 4px;
  color: ${BeigeFifthColor};
`

const renderVersionInformation =
	<InformationWrapper>
		<TitleText>버전 정보 확인하기</TitleText>
		<InformationContainer>
			<AutoHeightImage width={50} source={ImagePaths.mypage.information.image}/>
			<VersionTitle>코코지 하우스</VersionTitle>
			<VersionCode>Version 1.0.3</VersionCode>
			<VersionCaption>현재 최신 버전을 사용 중이에요</VersionCaption>
		</InformationContainer>
	</InformationWrapper>

export default renderVersionInformation