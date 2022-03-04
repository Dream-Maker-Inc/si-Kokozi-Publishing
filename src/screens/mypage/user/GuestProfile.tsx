import React from 'react'
import {FlatList, SafeAreaView, View} from 'react-native'
import styled from '@emotion/native'
import {BeigeFirstColor, BeigeSecondColor, BeigeThirdColor, navyColor, primaryColor} from '../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import {Caption, Title} from 'react-native-paper'
import RenderStory from '../../../components/sub/mypage/guests-profile/RenderStory'
import ImagePaths from '../../../common/ImagePaths'
import CustomHeader from '../../../components/global/header/CustomHeader'

const data = [
	{
		title: '까치 까치 설날',
		author: '친구',
		time: '3:00'
	},
	{
		title: '메리 크리스마스',
		author: '친구',
		time: '3:00'
	},
	{
		title: '생일 축하해',
		author: '친구',
		time: '3:00'
	},
	{
		title: '까치 까치 설날',
		author: '친구',
		time: '3:00'
	},
	{
		title: '메리 크리스마스',
		author: '친구',
		time: '3:00'
	},
	{
		title: '생일 축하해',
		author: '친구',
		time: '3:00'
	},
]

const PageWrapper = styled(SafeAreaView)`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeFirstColor};
`

const ThumbnailImage = styled(AutoHeightImage)`
  width: 100px;
  height: 100px;
  margin-top: 40px;
`

const ThumbnailCaption = styled(Title)`
  font-size: 24px;
  font-weight: bold;
  margin-top: 16px;
  color: ${navyColor};
`

const SharedWrapper = styled(View)`
  flex: 1;
  width: 100%;
  margin-top: 48px;
  background-color: ${BeigeSecondColor};
`

const SharedHeader = styled(View)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 22px 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${BeigeThirdColor};
`

const TitleText = styled(Title)`
  color: ${navyColor};
  font-size: 17px;
  font-weight: bold;
`

const CounterText = styled(Caption)`
  font-size: 14px;
  color: ${primaryColor};
`

const GuestProfile = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="light" left="notification" right="more" title="게스트 프로필"/>
		<ThumbnailImage width={100} source={ImagePaths.mypage.user.guest}/>
		<ThumbnailCaption>친구</ThumbnailCaption>

		<SharedWrapper>
			<SharedHeader>
				<TitleText>공유한 이야기</TitleText>
				<CounterText>3개</CounterText>
			</SharedHeader>
			<FlatList data={data} renderItem={RenderStory}/>
		</SharedWrapper>

	</PageWrapper>

export default GuestProfile