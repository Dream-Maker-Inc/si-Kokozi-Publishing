import styled from '@emotion/native'
import {Text, TouchableOpacity} from 'react-native'
import {BeigeFifthColor} from '../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../../common/ImagePaths'
import React from 'react'
import {ComponentContainer} from './renderSound'

const WifiText = styled(Text)`
  flex-grow: 1;
  font-size: 16px;
  color: ${BeigeFifthColor};
  margin-left: 16px;
`

export const renderWifi =
	<ComponentContainer>
		<AutoHeightImage
			width={24}
			source={ImagePaths.components.icons.wifi}
		/>
		<WifiText>U+Net369C</WifiText>
		<TouchableOpacity>
			<AutoHeightImage
				width={24}
				source={ImagePaths.components.icons.refresh}
			/>
		</TouchableOpacity>
	</ComponentContainer>

