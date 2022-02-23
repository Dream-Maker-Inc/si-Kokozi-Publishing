import React from 'react'
import styled from '@emotion/native'
import {Switch, Title} from 'react-native-paper'
import {SafeAreaView, Text, View} from 'react-native'
import {BeigeFifthColor, BeigeForthColor, BeigeSecondColor, navyColor, primaryColor} from '../../../common/Colors'
import CustomHeader from '../../../components/global/header/CustomHeader'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const TitleText = styled(Title)`
  font-size: 17px;
  font-weight: bold;
  color: ${navyColor};
`

const Wrapper = styled(View)`
  margin: 20px 24px;
`

const SettingsContainer = styled(View)`
  display: flex;
  flex-direction: column;
  margin: 0 8px 16px;
`

const SwitchContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const SwitchName = styled(Text)`
  font-size: 14px;
  color: ${navyColor};
`

const CaptionText = styled(Text)`
  font-size: 12px;
  color: ${BeigeFifthColor};
`

const Divider = styled(View)`
  width: 100%;
  height: 1px;
  background-color: ${BeigeForthColor};
`

const NotificationSetting = () => {
	const [isSwitchOn, setIsSwitchOn] = React.useState(false)

	return <PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="알림 설정"/>
		<Wrapper>
			<TitleText>알림 설정</TitleText>

			<SettingsContainer>
				<SwitchContainer>
					<SwitchName>서비스 알림 받기</SwitchName>
					<Switch
						color={primaryColor}
						value={isSwitchOn}
						onValueChange={() => setIsSwitchOn(!isSwitchOn)}
					/>
				</SwitchContainer>
				<CaptionText>
					새로운 아띠 등록, 새롭게 공유된 이야기, 게스트 초대 알림을 실시간으로 확인할 수 있어요
				</CaptionText>
			</SettingsContainer>

			<Divider/>

			<SettingsContainer>
				<SwitchContainer>
					<SwitchName>이벤트 및 혜택 알림 받기</SwitchName>
					<Switch
						color={primaryColor}
						value={isSwitchOn}
						onValueChange={() => setIsSwitchOn(!isSwitchOn)}
					/>
				</SwitchContainer>
				<CaptionText>
					진행 중인 이벤트 및 프로모션, 혜택 정보를 확인할 수 있어요
				</CaptionText>
			</SettingsContainer>
		</Wrapper>
	</PageWrapper>
}

export default NotificationSetting