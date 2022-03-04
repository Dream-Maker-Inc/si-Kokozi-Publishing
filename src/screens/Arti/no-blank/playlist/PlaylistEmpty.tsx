import React from 'react'
import styled from '@emotion/native'
import {SafeAreaView} from 'react-native'
import ImagePaths from '../../../../common/ImagePaths'
import {BeigeSecondColor} from '../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import CustomHeader from '../../../../components/global/header/CustomHeader'
import OutlinedAddButton from '../../../../components/global/buttons/outlined/OutlinedAddButton'

const PageWrapper = styled(SafeAreaView)`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ContentWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ScreenImage = styled(AutoHeightImage)`
  margin: 32px 0;
`

const PlaylistEmpty = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="플레이리스트"/>

		<ContentWrapper>
			<AutoHeightImage width={273} source={ImagePaths.arti.playlist.blank.text}/>
			<ScreenImage width={200} source={ImagePaths.arti.playlist.blank.image}/>
			<OutlinedAddButton icon="plus" title="플레이리스트 만들기"/>
		</ContentWrapper>
	</PageWrapper>

export default PlaylistEmpty