import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import styled from '@emotion/native'
import {BeigeSecondColor} from '../../../common/Colors'
import HeaderBackCloseDark from '../../../components/header/dark/HeaderBackCloseDark'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const NoGuests = () =>
	<PageWrapper>
		<HeaderBackCloseDark title={'게스트 관리'}/>

		<StatusBar backgroundColor={BeigeSecondColor} barStyle="dark-content"/>
	</PageWrapper>

export default NoGuests