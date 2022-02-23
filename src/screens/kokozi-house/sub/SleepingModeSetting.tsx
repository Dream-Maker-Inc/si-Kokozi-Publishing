import React, {useState} from 'react'
import {SafeAreaView, Text} from 'react-native'
import {BeigeFifthColor, BeigeSecondColor, BeigeThirdColor, navyColor} from '../../../common/Colors'
import styled from '@emotion/native'
import {Picker} from '@react-native-picker/picker'
import CustomHeader from '../../../components/global/header/CustomHeader'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
  padding: 20px;
`

const TitleText = styled(Text)`
  font-size: 17px;
  font-weight: bold;
  color: ${navyColor};
`

const ContentContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 80px;
  padding-left: 10px;
  border-bottom-color: ${BeigeThirdColor};
  border-bottom-width: 1px;
`

const ItemText = styled(Text)`
  font-size: 14px;
  color: ${navyColor};
`

const PickerWrapper = styled.View`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 40px;
  margin-left: 20px;
  border-radius: 30px;
  overflow: hidden;
`

const HousePicker = styled(Picker)`
  width: 100%;
  height: 100%;
  border-radius: 40px;
  background-color: ${BeigeThirdColor};
`

const CaptionText = styled(Text)`
  margin-top: 8px;
  font-size: 12px;
  color: ${BeigeFifthColor};
`

const SleepingModeSetting = () => {
	const [selectedLanguage, setSelectedLanguage] = useState()

	return <>
		<CustomHeader statusBarColor="dark" title="코코지 하우스 설정" left="back"/>

		<PageWrapper>
			<TitleText>잠자기 모드 설정</TitleText>
			<ContentContainer>
				<ItemText>잠자기 모드 시간 설정</ItemText>

				<PickerWrapper>
					<HousePicker
						selectedValue={selectedLanguage}
						dropdownIconColor={BeigeFifthColor}
						mode="dropdown"
					>
						<Picker.Item color={BeigeFifthColor} label="3분" value="kokozi"/>
						<Picker.Item color={BeigeFifthColor} label="5분" value="kokozi"/>
						<Picker.Item color={BeigeFifthColor} label="10분" value="kokozi"/>
						<Picker.Item color={BeigeFifthColor} label="잠자기 모드를 설정하지 않음" value="kokozi"/>
					</HousePicker>
				</PickerWrapper>
			</ContentContainer>

			<CaptionText>잠자기 모드는 코코지 하우스의 배터리 사용을 절약해줘요.</CaptionText>
			<CaptionText>다락방 지붕을 터치하면 잠자기 모드를 해제할 수 있어요.</CaptionText>
		</PageWrapper>
	</>
}

export default SleepingModeSetting