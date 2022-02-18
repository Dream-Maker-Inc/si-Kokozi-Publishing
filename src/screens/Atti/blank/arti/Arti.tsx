import React from 'react'
import styled from '@emotion/native'
import {BeigeSecondColor} from '../../../../common/Colors'
import {ScrollView} from 'react-native'

const PageWrapper = styled.SafeAreaView`
  width: 100%;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const BackgroundText = styled.Image`
  width: 70%;
  margin: 0 auto;
  z-index: 1;
`

const BackgroundImage = styled.Image`
  width: 100%;
  height: 500px;
  margin: -180px auto 0;
`

const Arti = () => <PageWrapper>
	<ScrollView>
		<BackgroundText
			resizeMode="contain"
			source={require('../../../../../assets/atti/all/blank-text.png')}/>
		<BackgroundImage
			resizeMode="contain"
			source={require('../../../../../assets/atti/all/blank-image.png')}/>
	</ScrollView>
</PageWrapper>

export default Arti