import React from 'react'
import styled from '@emotion/native'
import {SafeAreaView, StatusBar} from 'react-native'
import {BeigeSecondColor} from '../../common/Colors'
import IconHeaderCloseDark from '../../components/global/header/dark/IconHeaderCloseDark'
import renderImages from '../../components/sub/pre-login/welcome/renderImages'
import renderButton from '../../components/sub/pre-login/welcome/renderButton'
import {renderSNS} from '../../components/sub/pre-login/welcome/renderSNS'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const Welcome = () =>
	<PageWrapper>
		<IconHeaderCloseDark/>
		{renderImages}
		{renderButton}
		{renderSNS}
		<StatusBar backgroundColor={BeigeSecondColor} barStyle="dark-content"/>
	</PageWrapper>

export default Welcome