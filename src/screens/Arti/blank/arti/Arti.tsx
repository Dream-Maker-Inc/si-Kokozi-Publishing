import React from 'react'
import styled from '@emotion/native'
import {ScrollView} from 'react-native'
import ImagePaths from '../../../../common/ImagePaths'
import {BeigeSecondColor} from '../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'

const PageWrapper = styled.SafeAreaView`
  width: 100%;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const BackgroundText = styled(AutoHeightImage)`
  margin: 40px auto 0;
  z-index: 1;
`

const Arti = () =>
	<PageWrapper>
		<ScrollView>
			<BackgroundText width={224} source={ImagePaths.arti.all.blankText}/>
			<AutoHeightImage width={360} source={ImagePaths.arti.all.blankImage}/>
		</ScrollView>
	</PageWrapper>

export default Arti