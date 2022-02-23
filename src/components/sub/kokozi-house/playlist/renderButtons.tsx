import React from 'react'
import styled from '@emotion/native'
import {Text, TouchableOpacity} from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeFifthColor, BeigeSecondColor} from '../../../../common/Colors'
import ImagePaths from '../../../../common/ImagePaths'

const ButtonWrapper = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 20px;
`

const RepeatButton = styled(TouchableOpacity)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
  padding: 10px;
  margin-right: 10px;
  background-color: ${BeigeSecondColor};
  border-radius: 4px;
`

const ShuffleButton = styled(TouchableOpacity)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
  padding: 10px;
  margin-left: 10px;
  background-color: ${BeigeSecondColor};
  border-radius: 4px;
`

const ButtonText = styled(Text)`
  font-size: 14px;
  margin-left: 10px;
  color: ${BeigeFifthColor};
`

const renderButtons =
	<ButtonWrapper>

		<RepeatButton>
			<AutoHeightImage width={24} source={ImagePaths.components.icons.repeat}/>
			<ButtonText>반복재생</ButtonText>
		</RepeatButton>

		<ShuffleButton>
			<AutoHeightImage width={24} source={ImagePaths.components.icons.shuffle}/>
			<ButtonText>셔플재생</ButtonText>
		</ShuffleButton>

	</ButtonWrapper>

export default renderButtons