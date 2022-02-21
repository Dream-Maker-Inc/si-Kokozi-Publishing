import React, {useState} from 'react'
import {SafeAreaView, StatusBar, TouchableOpacity, View} from 'react-native'
import styled from '@emotion/native'
import {
	BeigeSecondColor,
	BeigeThirdColor,
	primaryColor,
	textCaptionColor,
	textDarkColor
} from '../../../../common/Colors'
import HeaderBackCloseLight from '../../../../components/header/light/HeaderBackCloseLight'
import {StepperThird} from '../../../../components/stepper/Stepper'
import AutoHeightImage from 'react-native-auto-height-image'
import {Caption, Paragraph, RadioButton, TextInput, Title} from 'react-native-paper'

const PageWrapper = styled(SafeAreaView)`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ScreenText = styled(AutoHeightImage)`
  margin-top: 16px;
  margin-bottom: 44px;
`

const InputContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 16px;
  border-top-color: ${BeigeThirdColor};
  border-top-width: 1px;
`

const ContainerColumn = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 68px;
  border-bottom-width: 1px;
  border-bottom-color: ${BeigeThirdColor};
`

const ColumnTitle = styled(Title)`
  font-weight: bold;
  font-size: 16px;
  margin-left: 27px;
  color: ${textDarkColor};
`

const ColumnInput = styled(TextInput)`
  flex-grow: 1;
  height: 100%;
  background-color: transparent;
  text-align: right;
  color: ${textDarkColor};
`

const RadioWrapper = styled(View)`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-right: 16px;
`

const RadioLabel = styled(Paragraph)`
  font-size: 14px;
  font-weight: bold;
  color: ${textDarkColor};
`

const CaptionText = styled(Caption)`
  margin-top: 112px;
  font-size: 12px;
  color: ${textCaptionColor};
`

const ConfirmButtonContainer = styled(View)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  bottom: 0;
  height: 90px;
  border-top-width: 1px;
  border-top-color: ${BeigeThirdColor};
`

const ConfirmButton = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 48px;
  background-color: ${primaryColor};
  border-radius: 8px;
`

const ButtonText = styled(Paragraph)`
  width: 100%;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`

const Kids = () => {
	const [checked, setChecked] = useState('남아')

	return <PageWrapper>
		<HeaderBackCloseLight title={'아이 정보 등록'}/>

		<StepperThird marginTop={16}/>
		<ScreenText
			source={require('../../../../../assets/kokozi-house/initialize/kids/text.png')}
			width={196}
		/>

		<InputContainer>
			<ContainerColumn>
				<ColumnTitle>애칭</ColumnTitle>
				<ColumnInput
					mode="outlined"
					placeholder="아이의 애칭을 입력해주세요"
					placeholderTextColor={textCaptionColor}
					outlineColor="transparent"
					activeOutlineColor="transparent"
				/>
			</ContainerColumn>
			<ContainerColumn>
				<ColumnTitle>성별</ColumnTitle>
				<RadioWrapper>
					<RadioButton
						value="남아"
						status={checked === '남아' ? 'checked' : 'unchecked'}
						onPress={() => setChecked('남아')}
					/>
					<RadioLabel
						onPress={
							() => setChecked('남아')
						}
					>남아</RadioLabel>
					<RadioButton
						value="여아"
						status={checked === '여아' ? 'checked' : 'unchecked'}
						onPress={() => setChecked('여아')}
					/>
					<RadioLabel
						onPress={
							() => setChecked('여아')
						}
					>여아</RadioLabel>
				</RadioWrapper>
			</ContainerColumn>
			<ContainerColumn>
				<ColumnTitle>생일</ColumnTitle>
				<ColumnInput
					mode="outlined"
					placeholder="생년월일 6자리를 입력해주세요"
					placeholderTextColor={textCaptionColor}
					outlineColor="transparent"
					activeOutlineColor="transparent"
				/>
			</ContainerColumn>
		</InputContainer>

		<CaptionText>
			{`아이의 생년월일을 입력하면 앱에서 보다 정확하게
		아이의 연령에 맞는 콘텐츠와 기능을 제공합니다.`}
		</CaptionText>

		<ConfirmButtonContainer>
			<ConfirmButton>
				<ButtonText>완료</ButtonText>
			</ConfirmButton>
		</ConfirmButtonContainer>

		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>
}

export default Kids