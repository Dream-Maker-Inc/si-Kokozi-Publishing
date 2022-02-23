import styled from '@emotion/native'
import React, {useState} from 'react'
import {BeigeFifthColor, BeigeThirdColor} from '../../../../common/Colors'
import {Picker} from '@react-native-picker/picker'

const PickerWrapper = styled.View`
  display: flex;
  justify-content: center;
  width: 122px;
  height: 100%;
  margin-left: 20px;
  border-radius: 30px;
  overflow: hidden;
`

const RenderHousePicker = styled(Picker)`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: ${BeigeThirdColor};
`

const RenderPicker = () => {
	const [selectedLanguage, setSelectedLanguage] = useState()

	return <PickerWrapper>
		<RenderHousePicker
			selectedValue={selectedLanguage}
			dropdownIconColor={BeigeFifthColor}
			mode="dropdown"
		>
			<Picker.Item color={BeigeFifthColor} label="코코지" value="kokozi"/>
			<Picker.Item color={BeigeFifthColor} label="코코지" value="kokozi"/>
			<Picker.Item color={BeigeFifthColor} label="코코지" value="kokozi"/>
		</RenderHousePicker>
	</PickerWrapper>
}

export default RenderPicker