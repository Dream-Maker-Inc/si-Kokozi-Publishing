import React from 'react'
import {SafeAreaView} from 'react-native'
import styled from '@emotion/native'
import {BeigeSecondColor} from '../../common/Colors'
import RenderButton from '../../components/sub/pre-login/intro/RenderButton'
import CustomHeader from '../../components/global/header/CustomHeader'
import RenderViewPager from '../../components/sub/pre-login/intro/RenderViewPager'

const PageWrapper = styled(SafeAreaView)`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const Intro = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" logo right="close"/>
		<RenderViewPager/>
		<RenderButton/>
	</PageWrapper>

export default Intro