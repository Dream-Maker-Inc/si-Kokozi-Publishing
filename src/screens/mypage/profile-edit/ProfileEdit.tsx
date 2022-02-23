import React from 'react'
import styled from '@emotion/native'
import {TextInput} from 'react-native-paper'
import ImagePaths from '../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import {beigeColor, BeigeSecondColor, BeigeThirdColor, navyColor, primaryColor} from '../../../common/Colors'
import CustomHeader from '../../../components/global/header/CustomHeader'

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
  background-color: ${BeigeThirdColor};
`

const NicknameContainer = styled(View)`
  width: 90%;
`

const NicknameCaption = styled(Text)`
  color: ${navyColor};
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
  margin-top: 8px;
  background-color: transparent;
`

const ValidateButton = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120%;
  min-width: 20%;
  margin-top: 10px;
  margin-left: 8px;
  border-radius: 8px;
  background-color: ${primaryColor};
`

const ButtonText = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  color: white;
`

const ProfileEdit = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="내 프로필" right="change"/>
		<ProfileImageContainer>
			<AutoHeightImage width={32} source={ImagePaths.components.icons.camera}/>
		</ProfileImageContainer>

		<NicknameContainer>
			<NicknameCaption>닉네임</NicknameCaption>
			<HorizontalContainer>
				<NicknameInput
					mode="outlined"
					outlineColor={beigeColor}
					activeOutlineColor={beigeColor}
					placeholderTextColor={navyColor}
					placeholder="코코지123"
				/>
				<ValidateButton>
					<ButtonText>중복확인</ButtonText>
				</ValidateButton>
			</HorizontalContainer>
		</NicknameContainer>
	</PageWrapper>

export default ProfileEdit