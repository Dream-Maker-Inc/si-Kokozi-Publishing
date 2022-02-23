import React from 'react'
import styled from '@emotion/native'
import ImagePaths from '../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native'
import HeaderBackDark from '../../../components/global/header/dark/HeaderBackDark'
import {BeigeFifthColor, BeigeSecondColor, navyColor} from '../../../common/Colors'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const BodyWrapper = styled(View)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const AppVersionContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  padding: 32px;
  margin-top: 16px;
  border-radius: 8px;
  background-color: white;
`

const VersionTitle = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
  color: ${navyColor};
`

const VersionNumber = styled(Text)`
  font-size: 13px;
  margin-top: 4px;
  margin-bottom: 8px;
  color: ${navyColor};
`

const VersionCaption = styled(Text)`
  font-size: 12px;
  color: ${BeigeFifthColor};
`

const styles = StyleSheet.create({
	shadowContainer: {
		shadowColor: '#999',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	}
})

const AppVersion = () =>
	<PageWrapper>
		<HeaderBackDark title="버전 정보"/>

		<BodyWrapper>
			<AppVersionContainer style={styles.shadowContainer}>
				<AutoHeightImage width={50} source={ImagePaths.logo.coloredImage}/>
				<VersionTitle>코코지 앱</VersionTitle>
				<VersionNumber>Version 1.0.11</VersionNumber>
				<VersionCaption>현재 최신버전 이용중입니다</VersionCaption>
			</AppVersionContainer>

			<AppVersionContainer style={styles.shadowContainer}>
				<AutoHeightImage width={50} source={ImagePaths.mypage.information.image}/>
				<VersionTitle>코코지 하우스</VersionTitle>
				<VersionNumber>Version 0.0.48</VersionNumber>
				<VersionCaption>최신버전: Version 0.0.50</VersionCaption>
			</AppVersionContainer>
		</BodyWrapper>

		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>

export default AppVersion