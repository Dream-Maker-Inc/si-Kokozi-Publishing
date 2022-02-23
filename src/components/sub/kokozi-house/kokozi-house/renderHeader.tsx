import styled from '@emotion/native'
import RenderPicker from './RenderHousePicker'
import {TouchableOpacity} from 'react-native'
import ImagePaths from '../../../../common/ImagePaths'
import React from 'react'
import AutoHeightImage from 'react-native-auto-height-image'

const HeaderContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 35px;
  margin-top: 16px;
`

const QuestionIcon = styled(AutoHeightImage)`
  margin-left: 8px;
`

export const renderHeader =
	<HeaderContainer>
		<RenderPicker/>
		<TouchableOpacity>
			<QuestionIcon width={32} source={ImagePaths.components.icons.question}/>
		</TouchableOpacity>
	</HeaderContainer>