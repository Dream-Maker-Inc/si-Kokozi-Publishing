import React from 'react'
import styled from '@emotion/native'
import {StyleSheet, Text} from 'react-native'
import ImagePaths from '../../../../../common/ImagePaths'
import {BeigeFirstColor} from '../../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'

export const ProfileWrapper = styled.View`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${BeigeFirstColor};
`

const ProfileImage = styled(AutoHeightImage)`
  margin: 20px 0;
`

export const ImageCaptionText = styled(Text)`
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
`

export const LicenseContainer = styled.View`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  bottom: 20px;
  right: 20px;

  width: 70px;
  height: 70px;

  border-radius: 10px;
  background-color: white;
`

const styles = StyleSheet.create({
	container: {
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

const renderProfile =
	<ProfileWrapper>
		<ProfileImage width={110} source={ImagePaths.arti.detail.thumbnail}/>
		<ImageCaptionText>호기</ImageCaptionText>

		<LicenseContainer style={styles.container}>
			<AutoHeightImage width={30} source={ImagePaths.arti.detail.thumbnail}/>
		</LicenseContainer>

	</ProfileWrapper>

export default renderProfile