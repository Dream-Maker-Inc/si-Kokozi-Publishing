import React from 'react'
import styled from '@emotion/native'
import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../../common/ImagePaths'

const ImagesContainer = styled.View`
  display: flex;
  align-items: center;
`
const ScreenImage = styled(AutoHeightImage)`
  margin-top: 60px;
`
const ScreenText = styled(AutoHeightImage)`
  margin-top: -20px;
`
const renderImages =
	<ImagesContainer>
		<ScreenImage source={ImagePaths.preLogin.intro.text} width={200}/>
		<ScreenText source={ImagePaths.preLogin.intro.image} width={400}/>
	</ImagesContainer>

export default renderImages