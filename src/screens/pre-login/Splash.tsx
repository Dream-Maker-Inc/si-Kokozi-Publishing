import React from 'react'
import styled from '@emotion/native'
import {SafeAreaView} from 'react-native'
import {primaryColor} from '../../common/Colors'

const PageWrapper = styled(SafeAreaView)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${primaryColor};
`

const LogoImage = styled.Image`
  width: 160px;
  height: 300px;
`

const Splash = () => <PageWrapper>
	<LogoImage resizeMode="contain" source={require('../../../assets/logo/image.png')}/>
</PageWrapper>

export default Splash