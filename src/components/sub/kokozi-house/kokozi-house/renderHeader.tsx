import React from 'react'
import styled from '@emotion/native'
import {TouchableOpacity} from 'react-native'
import Picker from '../../../global/picker/Picker'
import ImagePaths from '../../../../common/ImagePaths'
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
		<Picker defaultText="코코지 하우스"/>
		<TouchableOpacity>
			<QuestionIcon width={32} source={ImagePaths.components.icons.question}/>
		</TouchableOpacity>
	</HeaderContainer>