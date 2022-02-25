import React from 'react'
import {SafeAreaView} from 'react-native'
import styled from '@emotion/native'
import {BeigeFifthColor, BeigeForthColor, BeigeSecondColor, primaryColor} from '../../../common/Colors'
import CustomHeader from '../../../components/global/header/CustomHeader'
import {TextInput} from 'react-native-paper'

const PageWrapper = styled(SafeAreaView)`
  position: relative;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const InputContainer = styled.View`
  margin: 32px 16px;
`

const InputCaptionText = styled.TextInput`
  font-size: 13px;
  font-weight: bold;
  color: ${BeigeFifthColor};
`

const Input = styled(TextInput)`
  background-color: transparent;
`

const ButtonContainer = styled.View`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  bottom: 0;
`

const SaveButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 48px;
  margin: 16px;
  border-radius: 8px;
  background-color: ${primaryColor};
`

const SaveButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`

const renderInputContainer =
	<InputContainer>
		<InputCaptionText>이야기 제목</InputCaptionText>
		<Input
			mode="outlined"
			placeholder="디폴트 네임"
			outlineColor={BeigeForthColor}
			activeOutlineColor={BeigeForthColor}
			placeholderTextColor={BeigeForthColor}
		/>
	</InputContainer>

const RecordSave = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="이야기 저장"/>
		{renderInputContainer}
		<ButtonContainer>
			<SaveButton>
				<SaveButtonText>저장하기</SaveButtonText>
			</SaveButton>
		</ButtonContainer>
	</PageWrapper>

export default RecordSave