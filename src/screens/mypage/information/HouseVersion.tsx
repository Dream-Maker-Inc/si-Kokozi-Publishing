import React from 'react'
import styled from '@emotion/native'
import {View} from 'react-native'
import {BeigeForthColor} from '../../../common/Colors'
import renderVersionInformation, {PageWrapper} from '../../../components/sub/mypage/information/house-version/renderVersionInformation'
import renderModelInformation from '../../../components/sub/mypage/information/house-version/renderModelInformation'
import CustomHeader from '../../../components/global/header/CustomHeader'

const Divider = styled(View)`
  width: 90%;
  height: 1px;
  margin: 12px auto 32px;
  background-color: ${BeigeForthColor};
`

const HouseVersion = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="코코지 하우스 정보"/>
		{renderVersionInformation}
		<Divider/>
		{renderModelInformation}
	</PageWrapper>

export default HouseVersion