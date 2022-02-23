import React from 'react'
import styled from '@emotion/native'
import {ScrollView, StatusBar} from 'react-native'
import {Divider} from 'react-native-paper'
import {BeigeSecondColor} from '../../../common/Colors'
import HeaderBackDark from '../../../components/global/header/dark/HeaderBackDark'
import renderTitle from '../../../components/sub/kokozi-house/lightening-help/renderTitle'
import renderContents from '../../../components/sub/kokozi-house/lightening-help/renderContents'

const PageWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const LighteningHelp = () =>
	<PageWrapper>
		<HeaderBackDark title="도움말"/>
		<ScrollView>
			{renderTitle}
			<Divider/>
			{renderContents}
		</ScrollView>
		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>

export default LighteningHelp