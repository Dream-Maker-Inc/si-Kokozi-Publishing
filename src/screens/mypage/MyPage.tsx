import React from 'react'
import styled from '@emotion/native'
import {ScrollView} from 'react-native'
import {BeigeSecondColor} from '../../common/Colors'
import renderProfile from '../../components/sub/mypage/mypage/RenderProfile'
import renderList, {Divider} from '../../components/sub/mypage/mypage/RenderList'
import CustomHeader from '../../components/global/header/CustomHeader'

const PageWrapper = styled(ScrollView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const MyPage = () =>
	<PageWrapper>

		<CustomHeader statusBarColor="dark" title="마이페이지"/>
		{renderProfile}
		<Divider/>
		{renderList}

	</PageWrapper>

export default MyPage