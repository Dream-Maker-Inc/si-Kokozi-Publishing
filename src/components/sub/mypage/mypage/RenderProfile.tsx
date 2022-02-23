import React from 'react'
import styled from '@emotion/native'
import {Title} from 'react-native-paper'
import {TouchableOpacity} from 'react-native'
import {navyColor} from '../../../../common/Colors'
import ImagePaths from '../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'

const ProfileContainer = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 100px;
  padding: 20px;
`

const ProfileInformation = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`

const ProfileName = styled(Title)`
  margin-left: 20px;
  font-weight: bold;
  color: ${navyColor};
`

const renderProfile =
	<ProfileContainer>
		<ProfileInformation>
			<AutoHeightImage width={60} source={ImagePaths.components.icons.profileImage}/>
			<ProfileName>코코지</ProfileName>
		</ProfileInformation>
		<AutoHeightImage width={24} source={ImagePaths.components.icons.arrowRight}/>
	</ProfileContainer>

export default renderProfile