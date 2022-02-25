import React from 'react'
import styled from '@emotion/native'
import {SafeAreaView} from 'react-native'
import ImagePaths from '../../../common/ImagePaths'
import {BeigeSecondColor} from '../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import CustomHeader from '../../../components/global/header/CustomHeader'

const PageWrapper = styled(SafeAreaView)`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const Contents = styled.View`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const RecordButtonContainer = styled(AutoHeightImage)`
  margin: 40px;
`

const RecordStart = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" title="녹음하기" right="close"/>
		<Contents>
			<AutoHeightImage source={ImagePaths.story.record.start.text} width={173}/>
		</Contents>
		<RecordButtonContainer source={ImagePaths.story.record.start.record} width={80}/>
	</PageWrapper>

export default RecordStart