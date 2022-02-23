import React from 'react'
import styled from '@emotion/native'
import {ScrollView, StatusBar} from 'react-native'
import {BeigeSecondColor} from '../../common/Colors'
import HeaderDark from '../../components/global/header/dark/HeaderDark'
import renderProfile from '../../components/sub/mypage/mypage/RenderProfile'
import renderList, {Divider} from '../../components/sub/mypage/mypage/RenderList'

const PageWrapper = styled(ScrollView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const MyPage = () =>
	<PageWrapper>

		<HeaderDark title={'마이페이지'}/>
		{renderProfile}
		<Divider/>
		{renderList}

		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>

export default MyPage