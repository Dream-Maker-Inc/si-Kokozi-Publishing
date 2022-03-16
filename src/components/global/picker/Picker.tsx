import React from 'react'
import styled from '@emotion/native'
import ImagePaths from '../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeFifthColor, BeigeThirdColor} from '../../../common/Colors'

const PickerWrapper = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  
  height: 35px;
  margin-left: 15px;
  padding: 8px 16px;

  overflow: hidden;
  border-radius: 20px;
  background-color: ${BeigeThirdColor};
`

const PickerText = styled.Text`
  font-size: 13px;
  margin-right: 8px;
  color: ${BeigeFifthColor};
`

type PickerModel = {
	defaultText: string
}

const Picker = (props: PickerModel) =>
	<PickerWrapper>
		<PickerText>{props.defaultText}</PickerText>
		<AutoHeightImage source={ImagePaths.components.icons.arrowDown} width={16}/>
	</PickerWrapper>


export default Picker