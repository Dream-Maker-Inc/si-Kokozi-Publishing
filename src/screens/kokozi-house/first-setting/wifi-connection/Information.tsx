import React, {useState} from 'react'
import {SafeAreaView, StatusBar, View} from 'react-native'
import styled from '@emotion/native'
import {BeigeFifthColor, BeigeForthColor, BeigeSecondColor, primaryColor} from '../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import {Caption, Paragraph, TextInput} from 'react-native-paper'
import {Picker} from '@react-native-picker/picker'
import HeaderBackCloseDark from '../../../../components/header/dark/HeaderBackCloseDark'

const PageWrapper = styled(SafeAreaView)`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ProgressImage = styled(AutoHeightImage)`
  margin: 16px 0;
`

const TitleImage = styled(AutoHeightImage)`
  margin-top: 16px;
  margin-bottom: 32px;
`

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

const SubmitButton = styled.TouchableOpacity`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 90%;
  height: 48px;

  bottom: 34px;
  left: 5%;
  right: 5%;

  border-radius: 8px;
  background-color: ${primaryColor};
`

const ButtonText = styled(Paragraph)`
  color: white;
  font-weight: bold;
  font-size: 16px;
`


const RenderInputContainer = () => {
	const [selectedLanguage, setSelectedLanguage] = useState()
	const [password, setPassword] = useState('')

	return <InputContainer>
		<InputLabel>와이파이 네트워크</InputLabel>
		<PickerWrapper>
			<HousePicker
				selectedValue={selectedLanguage}
				dropdownIconColor={BeigeFifthColor}
				mode="dropdown"
			>
				<Picker.Item
					color={BeigeFifthColor}
					label="Network A"
					value="Network A"
				/>
				<Picker.Item
					color={BeigeFifthColor}
					label="Network B"
					value="Network B"
				/>
				<Picker.Item
					color={BeigeFifthColor}
					label="Network C"
					value="Network C"
				/>
			</HousePicker>
		</PickerWrapper>
		<InputLabel>와이파이 비밀번호</InputLabel>
		<PasswordInput
			mode="outlined"
			placeholder="비밀번호"
			secureTextEntry
			right={<TextInput.Icon name="eye"/>}
		/>
	</InputContainer>
}

const Information = () =>

	<PageWrapper>
		<HeaderBackCloseDark title={'코코지 하우스 세팅'}/>
		<ProgressImage
			width={84}
			source={require('../../../../../assets/components/stepper/step-2.png')}
		/>
		<TitleImage
			width={288}
			source={require('../../../../../assets/kokozi-house/wifi/information/connection-information-text.png')}
		/>
		<RenderInputContainer/>

		<SubmitButton>
			<ButtonText>다음</ButtonText>
		</SubmitButton>
		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>


export default Information