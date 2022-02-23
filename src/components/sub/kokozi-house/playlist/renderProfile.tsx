import styled from '@emotion/native'
import {BeigeFifthColor, BeigeThirdColor, navyColor} from '../../../../common/Colors'
import React from 'react'
import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../../common/ImagePaths'
import {Text} from 'react-native'

const PlaylistProfileContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0 16px;
`

const Thumbnail = styled(AutoHeightImage)`
  background-color: ${BeigeThirdColor};
`

const ProfileTextContainer = styled.View`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  margin-left: 16px;
`

const PlaylistTitle = styled(Text)`
  font-weight: bold;
  font-size: 16px;
  color: ${navyColor};
`

const PlaylistInfo = styled.View`
  display: flex;
  flex-direction: row;
`

const Count = styled(Text)`
  font-size: 12px;
  color: ${BeigeFifthColor};
`

const RunningTime = styled(Text)`
  font-size: 12px;
  color: ${BeigeFifthColor};
`

const renderProfile =
	<PlaylistProfileContainer>
		<Thumbnail width={40} source={ImagePaths.arti.blankThumbnail}/>

		<ProfileTextContainer>
			<PlaylistTitle>게스트 플레이리스트</PlaylistTitle>
			<PlaylistInfo>
				<Count>이야기 6개</Count>
				<RunningTime>30분</RunningTime>
			</PlaylistInfo>
		</ProfileTextContainer>

	</PlaylistProfileContainer>

export default renderProfile