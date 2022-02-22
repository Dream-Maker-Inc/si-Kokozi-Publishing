import React from 'react'
import {SafeAreaView, StatusBar, TouchableOpacity, View} from 'react-native'
import HeaderBackEditLight from '../../../components/header/light/HeaderBackEditLight'
import {beigeColor, BeigeSecondColor, primaryColor, secondaryColor, textDarkColor} from '../../../common/Colors'
import styled from '@emotion/native'
import AutoHeightImage from 'react-native-auto-height-image'
import {Caption, Paragraph, TextInput} from 'react-native-paper'

const PageWrapper = styled(SafeAreaView)`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ProfileImageContainer = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin: 40px auto;
  border-radius: 8px;
  background-color: ${secondaryColor};
`

const NicknameContainer = styled(View)`
  width: 90%;
`

const NicknameCaption = styled(Caption)`
  color: ${textDarkColor};
  font-size: 13px;
  font-weight: bold;
`

const HorizontalContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
`

const NicknameInput = styled(TextInput)`
  flex-grow: 1;
  background-color: transparent;
`

const ValidateButton = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120%;
  min-width: 20%;
  margin-top: 4px;
  margin-left: 8px;
  border-radius: 8px;
  background-color: ${primaryColor};
`

const ButtonText = styled(Paragraph)`
  font-size: 14px;
  font-weight: bold;
  color: white;
`

const ProfileEdit = () =>
	<PageWrapper>
		<HeaderBackEditLight title={'내 프로필'}/>

		<ProfileImageContainer>
			<AutoHeightImage
				source={require('../../../../assets/components/icons/camera.png')}
				width={32}
			/>
		</ProfileImageContainer>

		<NicknameContainer>
			<NicknameCaption>닉네임</NicknameCaption>
			<HorizontalContainer>
				<NicknameInput
					mode="outlined"
					outlineColor={beigeColor}
					activeOutlineColor={beigeColor}
					placeholderTextColor={textDarkColor}
					placeholder="코코지123"
				/>
				<ValidateButton>
					<ButtonText>중복확인</ButtonText>
				</ValidateButton>
			</HorizontalContainer>
		</NicknameContainer>

		<StatusBar backgroundColor={BeigeSecondColor} barStyle="dark-content"/>
	</PageWrapper>

export default ProfileEdit