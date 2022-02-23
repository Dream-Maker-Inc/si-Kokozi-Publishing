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

const Notification = () =>
	<PageWrapper>
		<ScreenTitle width={242} source={ImagePaths.mypage.notification.text}/>
		<AutoHeightImage width={200} source={ImagePaths.mypage.notification.image}/>
	</PageWrapper>

export default Notification