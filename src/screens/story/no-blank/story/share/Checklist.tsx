import React from 'react'
import styled from '@emotion/native'
import {SafeAreaView} from 'react-native'
import ImagePaths from '../../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeSecondColor} from '../../../../../common/Colors'
import CustomHeader from '../../../../../components/global/header/CustomHeader'
import renderFooter from '../../../../../components/sub/story/share/checklist/RenderFooter'
import renderChecklist from '../../../../../components/sub/story/share/checklist/RenderChecklist'

const PageWrapper = styled(SafeAreaView)`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ScreenText = styled(AutoHeightImage)`
  margin: 60px;
`
const Checklist = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="이야기 공유하기" right="close"/>
		<ScreenText source={ImagePaths.story.story.share.checklist.text} width={261}/>

		{renderChecklist}
		{renderFooter}
	</PageWrapper>

export default Checklist