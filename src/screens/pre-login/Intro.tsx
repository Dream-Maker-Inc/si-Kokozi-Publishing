import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import styled from '@emotion/native'
import {BeigeSecondColor} from '../../common/Colors'
import IconHeaderCloseDark from '../../components/global/header/dark/IconHeaderCloseDark'
import RenderViewPager from '../../components/sub/pre-login/intro/RenderViewPager'
import RenderButton from '../../components/sub/pre-login/intro/RenderButton'

const PageWrapper = styled(SafeAreaView)`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const Intro = () =>
	<PageWrapper>
		<IconHeaderCloseDark/>
		<RenderViewPager/>
		<RenderButton/>
		<StatusBar backgroundColor={BeigeSecondColor} barStyle="dark-content"/>
	</PageWrapper>

export default Intro