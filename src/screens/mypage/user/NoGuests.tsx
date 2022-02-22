import React from 'react'
import {SafeAreaView, StatusBar, View} from 'react-native'
import styled from '@emotion/native'
import {BeigeSecondColor} from '../../../common/Colors'
import HeaderBackCloseDark from '../../../components/header/dark/HeaderBackCloseDark'
import AutoHeightImage from 'react-native-auto-height-image'
import OutlinedAddButton from '../../../components/buttons/outlined/OutlinedAddButton'

const PageWrapper = styled(SafeAreaView)`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ScreenText = styled(AutoHeightImage)`
  margin-top: 72px;
`

const ScreenImage = styled(AutoHeightImage)`
  margin-top: 40px;
`
const Spacer = styled(View)`
  height: 40px;
`

const NoGuests = () =>
	<PageWrapper>
		<HeaderBackCloseDark title={'게스트 관리'}/>

		<ScreenText
			source={require('../../../../assets/mypage/user/text.png')}
			width={321}
		/>

		<ScreenImage
			source={require('../../../../assets/mypage/user/image.png')}
			width={200}
		/>

		<Spacer/>

		<OutlinedAddButton title={'초대하기'}/>

		<StatusBar backgroundColor={BeigeSecondColor} barStyle="dark-content"/>
	</PageWrapper>

export default NoGuests