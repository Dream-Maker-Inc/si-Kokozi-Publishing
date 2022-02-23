import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import styled from '@emotion/native'
import {BeigeSecondColor, primaryColor} from '../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../../common/ImagePaths'
import CustomHeader from '../../../../components/global/header/CustomHeader'

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
		<CustomHeader statusBarColor="dark" title="코코지 하우스 세팅" right="close"/>
		<ScreenText width={177} source={ImagePaths.kokoziHouse.firstSetting.setting.start.text}/>
		<AutoHeightImage width={320} source={ImagePaths.kokoziHouse.firstSetting.setting.start.image}/>

		<SubmitButton>
			<ButtonText>시작하기</ButtonText>
		</SubmitButton>
	</PageWrapper>

export default SettingStart