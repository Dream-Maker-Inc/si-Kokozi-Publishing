import React, {useState} from 'react'
import {SafeAreaView, StatusBar, TouchableOpacity} from 'react-native'
import {BeigeFifthColor, BeigeForthColor, BeigeSecondColor, BeigeThirdColor, primaryColor} from '../../common/Colors'
import HeaderNotiMoreDark from '../../components/header/dark/IconHeaderNotiMoreDark'
import styled from '@emotion/native'
import {Picker} from '@react-native-picker/picker'
import PageBottomPlayerBlank from '../../components/player/PageBottomPlayerBlank'
import {Caption, Headline, Paragraph} from 'react-native-paper'
import MultiSlider from '@ptomasroos/react-native-multi-slider'

const PageWrapper = styled(SafeAreaView)`
  position: relative;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const HeaderContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 35px;
  margin-top: 16px;
`

const PickerWrapper = styled.View`
  display: flex;
  justify-content: center;
  width: 122px;
  height: 100%;
  margin-left: 20px;
  border-radius: 30px;
  overflow: hidden;
`

const HousePicker = styled(Picker)`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: ${BeigeThirdColor};
`

const QuestionIcon = styled.Image`
  width: 32px;
  height: 32px;
  margin-left: 8px;
`

const BodyContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
`

const BodyBackgroundImage = styled.Image`
  position: absolute;
  height: 440px;
  top: 30%;
`

const ThumbnailImage = styled.Image`
  width: 192px;
  height: 200px;
  margin-top: 14%;
`

const TitleContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

const TitleText = styled(Headline)`
  font-weight: bold;
`

const EditButton = styled.Image`
  width: 24px;
  height: 24px;
  margin-left: 4px;
`

const CaptionText = styled(Caption)`
  color: ${BeigeFifthColor};
  font-size: 14px;
  margin-top: 8px;
`

const ComponentContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 90%;
  margin: 24px auto 0;
  padding: 20px 24px;
  height: 64px;
  border-radius: 12px;
  background-color: ${BeigeThirdColor};
`

const ComponentIcon = styled.Image`
  width: 24px;
  height: 24px;
`

const WifiText = styled(Paragraph)`
  flex-grow: 1;
  margin-left: 16px;
`

const Player = styled(PageBottomPlayerBlank)`
  position: absolute;
  bottom: 0;
`

const RenderPicker = () => {
	const [selectedLanguage, setSelectedLanguage] = useState()

	return <>
		<PickerWrapper>
			<HousePicker
				selectedValue={selectedLanguage}
				dropdownIconColor={BeigeFifthColor}
				mode="dropdown"
			>
				<Picker.Item
					color={BeigeFifthColor}
					label="코코지"
					value="kokozi"
				/>
				<Picker.Item
					color={BeigeFifthColor}
					label="코코지"
					value="kokozi"
				/>
				<Picker.Item
					color={BeigeFifthColor}
					label="코코지"
					value="kokozi"
				/>
			</HousePicker>
		</PickerWrapper>
	</>
}

const KokoziHouse = () =>
	<PageWrapper>
		<HeaderNotiMoreDark title={'코코지 하우스'}/>
		<HeaderContainer>
			<RenderPicker/>
			<QuestionIcon
				resizeMode="cover"
				source={require('../../../assets/kokozi-house/question.png')}
			/>
		</HeaderContainer>
		<BodyContainer>
			<BodyBackgroundImage
				resizeMode="contain"
				source={require('../../../assets/kokozi-house/rounded-background.png')}
			/>
			<ThumbnailImage
				resizeMode="contain"
				source={require('../../../assets/kokozi-house/thumbnail.png')}
			/>
			<TitleContainer>
				<TitleText>코코지 하우스</TitleText>
				<TouchableOpacity>
					<EditButton
						resizeMode="contain"
						source={require('../../../assets/atti/edit/edit.png')}
					/>
				</TouchableOpacity>
			</TitleContainer>
			<CaptionText>배터리 88%</CaptionText>
			<ComponentContainer>
				<ComponentIcon
					resizeMode="contain"
					source={require('../../../assets/kokozi-house/wifi.png')}
				/>
				<WifiText>U+Net369C</WifiText>
				<TouchableOpacity>
					<ComponentIcon
						resizeMode="contain"
						source={require('../../../assets/kokozi-house/refresh.png')}
					/>
				</TouchableOpacity>
			</ComponentContainer>
			<ComponentContainer>
				<ComponentIcon
					resizeMode="contain"
					source={require('../../../assets/kokozi-house/audio.png')}
				/>
				<MultiSlider
					containerStyle={{marginLeft: 16}}
					selectedStyle={{
						backgroundColor: primaryColor
					}}
					markerStyle={{
						width: 24,
						height: 24,
						marginTop: 6,
						backgroundColor: 'white',
						shadowColor: '#999',
						shadowOffset: {
							width: 0,
							height: 2,
						},
						shadowOpacity: 0.25,
						shadowRadius: 3.84,

						elevation: 5,
					}}
					trackStyle={{
						height: 8,
						backgroundColor: BeigeForthColor,
						borderRadius: 10
					}}
				/>
			</ComponentContainer>
		</BodyContainer>
		<Player/>
		<StatusBar
			barStyle="dark-content"
			backgroundColor={BeigeSecondColor}
		/>
	</PageWrapper>


export default KokoziHouse