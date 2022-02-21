import React from 'react'
import styled from '@emotion/native'
import {TouchableOpacity} from 'react-native'
import {PlumColor, primaryColor} from '../../../common/Colors'
import {Paragraph} from 'react-native-paper'

type FilledButtonModel = {
	backgroundColor: 'red' | 'green',
	text: string,
}

const FilledButton = (props: FilledButtonModel) => {
	const ButtonStyle = styled(TouchableOpacity)`
      display: flex;
      align-items: center;
      justify-content: center;

      width: 90%;
      height: 48px;

      margin: 16px;

      border-radius: 8px;
      background-color: ${'red' ? primaryColor : PlumColor};
	`

	const TextStyle = styled(Paragraph)`
      color: white;
      font-size: 16px;
      font-weight: bold;
	`

	return <>
		<ButtonStyle>
			<TextStyle>{props.text}</TextStyle>
		</ButtonStyle>
	</>
}

export default FilledButton