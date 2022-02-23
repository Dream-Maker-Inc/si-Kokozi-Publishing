import React from 'react'
import styled from '@emotion/native'
import {Paragraph} from 'react-native-paper'
import {TouchableOpacity} from 'react-native'
import {primaryColor} from '../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../../common/ImagePaths'

const ButtonWrapper = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px 14px;
  background-color: transparent;
  border-width: 1px;
  border-color: ${primaryColor};
  border-radius: 30px;
`

const ButtonText = styled(Paragraph)`
  color: ${primaryColor};
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
`

type CreatePlaylistButtonModel = {
	title: string
}

const OutlinedAddButton = (props: CreatePlaylistButtonModel) => <>
	<ButtonWrapper>
		<AutoHeightImage width={16} source={ImagePaths.components.icons.plus}/>
		<ButtonText>{props.title}</ButtonText>
	</ButtonWrapper>
</>

export default OutlinedAddButton