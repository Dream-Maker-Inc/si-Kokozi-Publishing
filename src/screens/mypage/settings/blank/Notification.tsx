import React from 'react'
import {Image} from 'react-native'
import styled from '@emotion/native'
import {BeigeSecondColor} from '../../../../common/Colors'

const PageWrapper = styled.SafeAreaView`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const BlankImage = styled.Image`
  width: 60%;
  height: 300px;
`

const Notification = () => <PageWrapper>
	<Image source={require('../../../../../assets/mypage/settings/notification/text.png')}/>
	<BlankImage resizeMode="contain"
		source={require('../../../../../assets/mypage/settings/notification/image.png')}/>
</PageWrapper>

export default Notification