import React from 'react'
import {Text, TouchableOpacity} from 'react-native'
import styled from '@emotion/native'
import {primaryColor} from '../../../../common/Colors'

export const TextButton = styled(Text)`
  text-align: center;
  color: ${primaryColor};
`

export const RenderButton = () =>
	<TouchableOpacity>
		<TextButton>건너뛰기</TextButton>
	</TouchableOpacity>

export default RenderButton