import React from 'react'
import styled from '@emotion/native'
import {backgroundColor} from '../../../../common/Colors'
import {ScrollView, Text} from 'react-native'

const All = () => <PageWrapper>
	<ScrollView>
		<Text>asdf</Text>
	</ScrollView>
</PageWrapper>

const PageWrapper = styled.SafeAreaView`
  width: 100%;
  flex: 1;
  background-color: ${backgroundColor};
`

const BackgroundText = styled.Image`
  width: 70%;
  margin: 0 auto;
  z-index: 1;
`

const BackgroundImage = styled.Image`
  width: 100%;
  height: 500px;
  margin: -180px auto 0;
`

export default All