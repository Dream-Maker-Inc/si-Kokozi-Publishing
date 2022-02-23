import React from 'react'
import {SafeAreaView, StatusBar, Text} from 'react-native'
import styled from '@emotion/native'
import {BeigeSecondColor, primaryColor} from '../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import HeaderCloseLight from '../../../../components/global/header/light/HeaderCloseLight'
import ImagePaths from '../../../../common/ImagePaths'

const PageWrapper = styled(SafeAreaView)`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ScreenText = styled(AutoHeightImage)`
  margin: 32px auto;
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

const ButtonText = styled(Text)`
  color: white;
  font-weight: bold;
  font-size: 16px;
`

const SettingStart = () =>
	<PageWrapper>
		<HeaderCloseLight title="코코지 하우스 세팅"/>
		<ScreenText width={177} source={ImagePaths.kokoziHouse.firstSetting.setting.start.text}/>
		<AutoHeightImage width={320} source={ImagePaths.kokoziHouse.firstSetting.setting.start.image}/>

		<SubmitButton>
			<ButtonText>시작하기</ButtonText>
		</SubmitButton>

		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>

export default SettingStart