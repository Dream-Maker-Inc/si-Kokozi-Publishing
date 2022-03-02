import React from 'react'
import styled from '@emotion/native'
import {Picker} from '@react-native-picker/picker'
import {BeigeFifthColor, BeigeThirdColor} from '../../../../../common/Colors'

const PickersContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
`

const PickerWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 35px;
  margin-left: 16px;
  border-radius: 20px;
  background-color: ${BeigeThirdColor};
`

const StyledPicker = styled(Picker)`
  width: 100%;
  color: ${BeigeFifthColor};
  font-size: 13px;
  transform: scale(.8);
`

const renderPickers =
	<PickersContainer>
		<PickerWrapper>
			<StyledPicker mode="dropdown">
				<Picker.Item label="모든 이야기" value="모든 이야기"/>
				<Picker.Item label="모든 이야기" value="모든 이야기"/>
				<Picker.Item label="모든 이야기" value="모든 이야기"/>
			</StyledPicker>
		</PickerWrapper>
		<PickerWrapper>
			<StyledPicker mode="dropdown">
				<Picker.Item label="최신순" value="최신순"/>
				<Picker.Item label="최신순" value="최신순"/>
				<Picker.Item label="최신순" value="최신순"/>
			</StyledPicker>
		</PickerWrapper>
	</PickersContainer>

export default renderPickers