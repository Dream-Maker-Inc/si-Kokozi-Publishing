import React from 'react'
import styled from '@emotion/native'
import {ScrollView} from 'react-native'
import ImagePaths from '../../../../common/ImagePaths'
import {BeigeSecondColor} from '../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import OutlinedAddButton from '../../../../components/global/buttons/outlined/OutlinedAddButton'

const PageWrapper = styled.SafeAreaView`
  width: 100%;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const StyledScrollView = styled(ScrollView)`
  width: 100%;
`

const ScreenText = styled(AutoHeightImage)`
  margin-top: 63px;
  margin-bottom: 32px;
`

const ScreenImage = styled(AutoHeightImage)`
  margin-bottom: 32px;
`

const PlaylistMain = () =>
	<PageWrapper>
		<StyledScrollView contentContainerStyle={{alignItems: 'center'}}>
			<ScreenText width={320} source={ImagePaths.story.playlist.blank.text}/>
			<ScreenImage width={200} source={ImagePaths.story.playlist.blank.image}/>
			<OutlinedAddButton title="플레이리스트 만들기"/>
		</StyledScrollView>
	</PageWrapper>

export default PlaylistMain