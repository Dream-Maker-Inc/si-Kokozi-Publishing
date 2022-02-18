import React from 'react'
import {TouchableOpacity} from 'react-native'
import styled from '@emotion/native'
import {primaryColor} from '../../../common/Colors'
import {Paragraph} from 'react-native-paper'

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

const ButtonImage = styled.Image`
  width: 16px;
  height: 16px;
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
		<ButtonImage resizeMode="contain" source={require('../../../../assets/components/plus.png')}/>
		<ButtonText>{props.title}</ButtonText>
	</ButtonWrapper>
</>

export default OutlinedAddButton