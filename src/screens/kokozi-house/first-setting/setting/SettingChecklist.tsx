import React from 'react'
import {SafeAreaView, StatusBar, Text} from 'react-native'
import styled from '@emotion/native'
import {BeigeSecondColor, primaryColor} from '../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../../common/ImagePaths'
import renderChecklist
	from '../../../../components/sub/kokozi-house/first-setting/setting/setting-checklist/renderChecklist'
import CustomHeader from '../../../../components/global/header/CustomHeader'

const PageWrapper = styled(SafeAreaView)`
  position: relative;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ScreenText = styled(AutoHeightImage)`
  margin: 60px auto;
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

const SettingChecklist = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" title="코코지 하우스 세팅" left="back" right="close"/>
		<ScreenText width={214} source={ImagePaths.kokoziHouse.firstSetting.setting.checklist.text}/>
		{renderChecklist}

		<SubmitButton>
			<ButtonText>준비 완료</ButtonText>
		</SubmitButton>

		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>

export default SettingChecklist