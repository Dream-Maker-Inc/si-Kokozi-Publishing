import React from 'react'
import styled from '@emotion/native'
import {ScrollView} from 'react-native'
import {Divider} from 'react-native-paper'
import {BeigeSecondColor} from '../../../common/Colors'
import renderTitle from '../../../components/sub/kokozi-house/lightening-help/renderTitle'
import renderContents from '../../../components/sub/kokozi-house/lightening-help/renderContents'
import CustomHeader from '../../../components/global/header/CustomHeader'

const PageWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const LighteningHelp = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" title="도움말" left="back"/>
		<ScrollView>
			{renderTitle}
			<Divider/>
			{renderContents}
		</ScrollView>
	</PageWrapper>

export default LighteningHelp