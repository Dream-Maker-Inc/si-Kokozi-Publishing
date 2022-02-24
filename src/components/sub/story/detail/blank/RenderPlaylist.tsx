import React from 'react'
import styled from '@emotion/native'
import ImagePaths from '../../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeSecondColor, navyColor} from '../../../../../common/Colors'
import OutlinedAddButton from '../../../../global/buttons/outlined/OutlinedAddButton'

const PlaylistWrapper = styled.View`
  width: 100%;
  margin-top: 32px;
  padding: 24px 16px;
  background-color: ${BeigeSecondColor};
`

const SectionTitleText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${navyColor};
`

const ScreenImage = styled(AutoHeightImage)`
  margin: 32px auto 24px;
`

const renderPlaylist =
	<PlaylistWrapper>
		<SectionTitleText>담은 플레이리스트</SectionTitleText>
		<ScreenImage width={253} source={ImagePaths.story.story.blank.detail.playlist}/>
		<OutlinedAddButton icon="plus" title={'플레이리스트에 담기'}/>
	</PlaylistWrapper>

export default renderPlaylist