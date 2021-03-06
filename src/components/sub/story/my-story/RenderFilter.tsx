import React from 'react'
import styled from '@emotion/native'
import {BeigeFifthColor, BeigeThirdColor} from '../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../../common/ImagePaths'

const PickerWrapper = styled.TouchableOpacity`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 67px;
  height: 35px;
  margin-left: 15px;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${BeigeThirdColor};
`

const PickerText = styled.Text`
  font-size: 13px;
  margin-right: 8px;
  color: ${BeigeFifthColor};
`

const RenderFilter = () =>
	<PickerWrapper>
		<PickerText>모든 이야기</PickerText>
		<AutoHeightImage source={ImagePaths.components.icons.arrowDown} width={16}/>
	</PickerWrapper>

export default RenderFilter