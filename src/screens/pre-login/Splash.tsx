import React from 'react'
import styled from '@emotion/native'
import {SafeAreaView, StatusBar} from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import {primaryColor} from '../../common/Colors'
import ImagePaths from '../../common/ImagePaths'

const PageWrapper = styled(SafeAreaView)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${primaryColor};
`

const Splash = () =>
	<PageWrapper>
		<AutoHeightImage width={126} source={ImagePaths.logo.image}/>
		<StatusBar barStyle="dark-content" backgroundColor={primaryColor}/>
	</PageWrapper>

export default Splash