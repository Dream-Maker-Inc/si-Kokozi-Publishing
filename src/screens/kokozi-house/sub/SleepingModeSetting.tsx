import styled from '@emotion/native'
import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import CustomHeader from '../../../components/global/header/CustomHeader'
import {BeigeFifthColor, BeigeSecondColor, BeigeThirdColor, navyColor} from '../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../common/ImagePaths'

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

const CaptionText = styled(Text)`
  margin-top: 8px;
  font-size: 12px;
  color: ${BeigeFifthColor};
`

const PickerWrapper = styled.TouchableOpacity`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 67px;
  height: 35px;
  margin-left: 15px;
  border-radius: 20px;
  overflow: hidden;
  background-color: ${BeigeThirdColor};
`

const PickerText = styled.Text`
  font-size: 13px;
  margin-right: 8px;
  color: ${BeigeFifthColor};
`

const SleepingModeSetting = () =>
	<>
		<CustomHeader statusBarColor="dark" title="코코지 하우스 설정" left="back"/>

		<PageWrapper>
			<TitleText>잠자기 모드 설정</TitleText>
			<ContentContainer>
				<ItemText>잠자기 모드 시간 설정</ItemText>

				<PickerWrapper>
					<PickerText>3분</PickerText>
					<AutoHeightImage source={ImagePaths.components.icons.arrowDown} width={16}/>
				</PickerWrapper>
			</ContentContainer>

			<CaptionText>잠자기 모드는 코코지 하우스의 배터리 사용을 절약해줘요.</CaptionText>
			<CaptionText>다락방 지붕을 터치하면 잠자기 모드를 해제할 수 있어요.</CaptionText>
		</PageWrapper>
	</>


export default SleepingModeSetting