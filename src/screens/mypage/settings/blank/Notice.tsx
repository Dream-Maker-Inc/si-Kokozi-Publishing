import React from 'react'
import styled from '@emotion/native'
import {BeigeSecondColor} from '../../../../common/Colors'
import {Image} from 'react-native'

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

const Notice = () => <PageWrapper>
	<Image source={require('../../../../../assets/mypage/settings/notice/text.png')}/>
	<BlankImage resizeMode="contain"
		source={require('../../../../../assets/mypage/settings/notice/image.png')}/>
</PageWrapper>

export default Notice