import React from 'react'
import styled from '@emotion/native'
import ImagePaths from '../../../common/ImagePaths'
import {BeigeSecondColor} from '../../../common/Colors'
import {SafeAreaView, View} from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import OutlinedAddButton from '../../../components/global/buttons/outlined/OutlinedAddButton'
import CustomHeader from '../../../components/global/header/CustomHeader'

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
		<CustomHeader statusBarColor="dark" left="back" right="more" title="게스트 관리"/>
		<ScreenText width={321} source={ImagePaths.mypage.user.text}/>
		<ScreenImage width={200} source={ImagePaths.mypage.user.image}/>

		<Spacer/>
		<OutlinedAddButton title={'초대하기'}/>
	</PageWrapper>

export default NoGuests