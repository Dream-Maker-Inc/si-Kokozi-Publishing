import React from 'react'
import styled from '@emotion/native'
import {Text, TouchableOpacity} from 'react-native'
import {primaryColor} from '../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../../common/ImagePaths'

const ButtonWrapper = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 0 auto;
  padding: 10px 14px;
  border-width: 1px;
  border-color: ${primaryColor};
  border-radius: 30px;
  background-color: transparent;
`

const ButtonText = styled(Text)`
  color: ${primaryColor};
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
`

type CreatePlaylistButtonModel = {
	title: string,
	icon:
		| 'plus'
		| 'list'
		| 'record'
		| 'share'
		| 'edit'
}

const OutlinedAddButton = (props: CreatePlaylistButtonModel) => {
	let iconSource

	switch (props.icon) {
	case 'plus':
		iconSource = ImagePaths.components.icons.plus
		break
	case 'list':
		iconSource = ImagePaths.components.icons.list
		break
	case 'record':
		iconSource = ImagePaths.components.icons.record
		break
	case 'share':
		iconSource = ImagePaths.components.icons.share
		break
	case 'edit':
		iconSource = ImagePaths.components.icons.edit
		break
	}

	return <>
		<ButtonWrapper>
			<AutoHeightImage width={24} source={iconSource}/>
			<ButtonText>{props.title}</ButtonText>
		</ButtonWrapper>
	</>
}

export default OutlinedAddButton