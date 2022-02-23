import React from 'react'
import styled from '@emotion/native'
import {StatusBar, View} from 'react-native'
import {BeigeForthColor, BeigeSecondColor} from '../../../common/Colors'
import HeaderBackDark from '../../../components/global/header/dark/HeaderBackDark'
import renderVersionInformation, {PageWrapper} from '../../../components/sub/mypage/information/house-version/renderVersionInformation'
import renderModelInformation from '../../../components/sub/mypage/information/house-version/renderModelInformation'

const Divider = styled(View)`
  width: 90%;
  height: 1px;
  margin: 12px auto 32px;
  background-color: ${BeigeForthColor};
`

const HouseVersion = () =>
	<PageWrapper>
		<HeaderBackDark title={'코코지 하우스 정보'}/>
		{renderVersionInformation}
		<Divider/>
		{renderModelInformation}
		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>

export default HouseVersion