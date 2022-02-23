import React from 'react'
import styled from '@emotion/native'
import ImagePaths from '../../../common/ImagePaths'
import {BeigeSecondColor} from '../../../common/Colors'
import {SafeAreaView, StatusBar, View} from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import HeaderBackCloseDark from '../../../components/global/header/dark/HeaderBackCloseDark'
import OutlinedAddButton from '../../../components/global/buttons/outlined/OutlinedAddButton'

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
		<ScreenText width={321} source={ImagePaths.mypage.user.text}/>
		<ScreenImage width={200} source={ImagePaths.mypage.user.image}/>

		<Spacer/>
		<OutlinedAddButton title={'초대하기'}/>
		<StatusBar backgroundColor={BeigeSecondColor} barStyle="dark-content"/>
	</PageWrapper>

export default NoGuests