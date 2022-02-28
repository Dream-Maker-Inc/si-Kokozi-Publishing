import React from 'react'
import styled from '@emotion/native'
import {Image, SafeAreaView} from 'react-native'
import ImagePaths from '../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeSecondColor, primaryColor} from '../../../common/Colors'
import CustomHeader from '../../../components/global/header/CustomHeader'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const RecordingAnimationContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`

const ControllerContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`

const TimeText = styled.Text`
  font-size: 22px;
  color: ${primaryColor};
  margin-bottom: 24px;
`

const Recording = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="확인하기"/>
		<RecordingAnimationContainer>
			<Image resizeMode="center" source={ImagePaths.story.record.recording}/>
		</RecordingAnimationContainer>
		<ControllerContainer>
			<TimeText>3:05</TimeText>
			<AutoHeightImage source={ImagePaths.story.record.start.stop} width={80}/>
		</ControllerContainer>
	</PageWrapper>

export default Recording