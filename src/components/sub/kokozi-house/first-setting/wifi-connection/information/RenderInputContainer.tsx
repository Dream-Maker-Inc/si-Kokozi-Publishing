import React, {useState} from 'react'
import {View} from 'react-native'
import styled from '@emotion/native'
import {Picker} from '@react-native-picker/picker'
import {Caption, TextInput} from 'react-native-paper'
import {BeigeFifthColor, BeigeForthColor} from '../../../../../../common/Colors'

const InputContainer = styled(View)`
  width: 90%;
  margin: 0 auto;
`

const InputLabel = styled(Caption)`
  font-weight: bold;
  font-size: 13px;
  color: ${BeigeFifthColor};
  margin-top: 16px;
  margin-bottom: 8px;
`

const PickerWrapper = styled.View`
  display: flex;
  justify-content: center;
  width: 100%;
  border: 1px solid ${BeigeForthColor};
  border-radius: 8px;
  overflow: hidden;
`

const HousePicker = styled(Picker)`
  width: 100%;
  background-color: transparent;
`

const PasswordInput = styled(TextInput)`
  width: 100%;
  border-radius: 8px;
  background-color: transparent;
`

const RenderPicker = () => {
	const [selectedLanguage, setSelectedLanguage] = useState()

	return <PickerWrapper>
		<HousePicker
			selectedValue={selectedLanguage}
			dropdownIconColor={BeigeFifthColor}
			mode="dropdown"
		>
			<Picker.Item color={BeigeFifthColor} label="Network A" value="Network A"/>
			<Picker.Item color={BeigeFifthColor} label="Network B" value="Network B"/>
			<Picker.Item color={BeigeFifthColor} label="Network C" value="Network C"/>
		</HousePicker>
	</PickerWrapper>
}

const RenderInputContainer = () =>
	<InputContainer>
		<InputLabel>와이파이 네트워크</InputLabel>
		<RenderPicker/>

		<InputLabel>와이파이 비밀번호</InputLabel>
		<PasswordInput
			mode="outlined"
			placeholder="비밀번호"
			secureTextEntry
			outlineColor={BeigeForthColor}
			activeOutlineColor={BeigeForthColor}
			right={<TextInput.Icon name="eye" color={BeigeForthColor}/>}
		/>
	</InputContainer>


export default RenderInputContainer