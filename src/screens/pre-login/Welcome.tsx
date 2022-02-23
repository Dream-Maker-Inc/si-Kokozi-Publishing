import React from 'react'
import styled from '@emotion/native'
import {SafeAreaView} from 'react-native'
import {BeigeSecondColor} from '../../common/Colors'
import {renderSNS} from '../../components/sub/pre-login/welcome/renderSNS'
import renderImages from '../../components/sub/pre-login/welcome/renderImages'
import renderButton from '../../components/sub/pre-login/welcome/renderButton'
import CustomHeader from '../../components/global/header/CustomHeader'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const Welcome = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" logo right="close"/>
		{renderImages}
		{renderButton}
		{renderSNS}
	</PageWrapper>

export default Welcome