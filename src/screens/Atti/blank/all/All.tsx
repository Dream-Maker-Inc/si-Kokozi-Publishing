import React from 'react'
import styled from '@emotion/native'
import {BeigeSecondColor} from '../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../../common/ImagePaths'

const PageWrapper = styled.SafeAreaView`
  display: flex;
  align-items: center;
  width: 100%;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ScreenText = styled(AutoHeightImage)`
  margin-top: 40px;
  z-index: 1;
`

const All = () =>
	<PageWrapper>
		<ScreenText width={224} source={ImagePaths.arti.all.blankText}/>
		<AutoHeightImage width={360} source={ImagePaths.arti.all.blankImage}/>
	</PageWrapper>

export default All