import React from 'react'
import styled from '@emotion/native'
import {SafeAreaView, StatusBar} from 'react-native'
import ImagePaths from '../../../../common/ImagePaths'
import {BeigeSecondColor} from '../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import HeaderBackDark from '../../../../components/global/header/dark/HeaderBackDark'
import OutlinedAddButton from '../../../../components/global/buttons/outlined/OutlinedAddButton'

const PageWrapper = styled(SafeAreaView)`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ScreenTitle = styled(AutoHeightImage)`
  margin-top: 100px;
  margin-bottom: 32px;
`

const ScreenImage = styled(AutoHeightImage)`
  margin-bottom: 32px;
`

const PlaylistEmpty = () =>
	<PageWrapper>
		<HeaderBackDark title="플레이리스트"/>

		<ScreenTitle width={273} source={ImagePaths.arti.playlist.blank.text}/>
		<ScreenImage width={200} source={ImagePaths.arti.playlist.blank.image}/>
		<OutlinedAddButton title="플레이리스트 만들기"/>

		<StatusBar backgroundColor={BeigeSecondColor} barStyle="dark-content"/>
	</PageWrapper>

export default PlaylistEmpty