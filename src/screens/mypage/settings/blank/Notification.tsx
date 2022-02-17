import React from 'react'
import {Image} from 'react-native'
import styled from '@emotion/native'
import {backgroundColor} from '../../../../common/Colors'

const PageWrapper = styled.SafeAreaView`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${backgroundColor};
`

const BlankImage = styled.Image`
  width: 60%;
  height: 300px;
`

const Notification = () => <PageWrapper>
	<Image source={require('../../../../../assets/mypage/settings/notification/notification-text.png')}/>
	<BlankImage resizeMode="contain"
		source={require('../../../../../assets/mypage/settings/notification/notification-image.png')}/>
</PageWrapper>

export default Notification