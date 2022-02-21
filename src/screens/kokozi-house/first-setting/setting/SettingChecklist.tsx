import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import styled from '@emotion/native'
import {BeigeSecondColor, primaryColor, textDarkColor} from '../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import {Paragraph} from 'react-native-paper'
import HeaderBackCloseDark from '../../../../components/header/dark/HeaderBackCloseDark'

const PageWrapper = styled(SafeAreaView)`
  position: relative;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const TitleText = styled(AutoHeightImage)`
  margin: 60px auto;
`

const ListContainer = styled.View`
  margin-top: 100px;
  padding-left: 24px;
`

const ListColumn = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 30px;
`

const ListText = styled(Paragraph)`
  margin-left: 12px;
  font-size: 14px;
  color: ${textDarkColor};
`

const TextMark = styled(Paragraph)`
  font-size: 14px;
  font-weight: bold;
  color: ${textDarkColor};
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

const renderChecklist =
	<ListContainer>
		<ListColumn>
			<AutoHeightImage
				width={16}
				source={require('../../../../../assets/components/icons/check.png')}
			/>
			<ListText>
				코코지 하우스의
				<TextMark> 충전 케이블이 연결</TextMark>
				되어 있나요?
			</ListText>
		</ListColumn>
		<ListColumn>
			<AutoHeightImage
				width={16}
				source={require('../../../../../assets/components/icons/check.png')}
			/>
			<ListText>
				코코지 하우스의
				<TextMark> 전원이 켜져 </TextMark>
				있나요?
			</ListText>
		</ListColumn>
		<ListColumn>
			<AutoHeightImage
				width={16}
				source={require('../../../../../assets/components/icons/check.png')}
			/>
			<ListText>
				<TextMark>스마트폰 와이파이(Wi-fi)에 연결</TextMark>
				되어 있나요?
			</ListText>
		</ListColumn>
	</ListContainer>

const SettingChecklist = () =>
	<PageWrapper>
		<HeaderBackCloseDark title="코코지 하우스 세팅"/>

		<TitleText
			width={214}
			source={require('../../../../../assets/kokozi-house/initialize/setting/checklist/text.png')}
		/>

		{renderChecklist}

		<SubmitButton>
			<ButtonText>준비 완료</ButtonText>
		</SubmitButton>

		<StatusBar
			barStyle="dark-content"
			backgroundColor={BeigeSecondColor}
		/>
	</PageWrapper>

export default SettingChecklist