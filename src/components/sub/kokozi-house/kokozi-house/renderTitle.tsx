import styled from '@emotion/native'
import AutoHeightImage from 'react-native-auto-height-image'
import {Text, TouchableOpacity} from 'react-native'
import {navyColor} from '../../../../common/Colors'
import ImagePaths from '../../../../common/ImagePaths'
import React from 'react'

const TitleContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const HouseNameText = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  color: ${navyColor};
`

const EditButton = styled(AutoHeightImage)`
  margin-left: 4px;
`

export const renderTitle =
	<TitleContainer>
		<HouseNameText>코코지 하우스</HouseNameText>
		<TouchableOpacity>
			<EditButton
				width={24}
				source={ImagePaths.components.icons.edit}
			/>
		</TouchableOpacity>
	</TitleContainer>