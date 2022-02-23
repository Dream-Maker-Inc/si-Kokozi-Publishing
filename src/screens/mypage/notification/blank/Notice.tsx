import React from 'react'
import styled from '@emotion/native'
import {BeigeSecondColor} from '../../../../common/Colors'
import ImagePaths from '../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'

const PageWrapper = styled.SafeAreaView`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ScreenTitle = styled(AutoHeightImage)`
  margin-bottom: 40px;
`

const Notice = () =>
	<PageWrapper>
		<ScreenTitle width={242} source={ImagePaths.mypage.notice.text}/>
		<AutoHeightImage width={200} source={ImagePaths.mypage.notice.image}/>
	</PageWrapper>

export default Notice