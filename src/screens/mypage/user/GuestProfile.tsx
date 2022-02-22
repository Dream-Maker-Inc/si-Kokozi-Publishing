import React from 'react'
import {FlatList, SafeAreaView, StatusBar, TouchableOpacity, View} from 'react-native'
import styled from '@emotion/native'
import {
	backgroundSecondaryColor,
	BeigeSecondColor,
	BeigeThirdColor,
	primaryColor,
	textCaptionColor,
	textDarkColor
} from '../../../common/Colors'
import HeaderNotiMoreLight from '../../../components/header/light/HeaderNotiMoreLight'
import AutoHeightImage from 'react-native-auto-height-image'
import {Caption, Title} from 'react-native-paper'

const data = [
	{
		title: '까치 까치 설날',
		author: '친구',
		runningTime: '3:00'
	},
	{
		title: '메리 크리스마스',
		author: '친구',
		runningTime: '3:00'
	},
	{
		title: '생일 축하해',
		author: '친구',
		runningTime: '3:00'
	},
	{
		title: '까치 까치 설날',
		author: '친구',
		runningTime: '3:00'
	},
	{
		title: '메리 크리스마스',
		author: '친구',
		runningTime: '3:00'
	},
	{
		title: '생일 축하해',
		author: '친구',
		runningTime: '3:00'
	},
]

const PageWrapper = styled(SafeAreaView)`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${backgroundSecondaryColor};
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
  color: ${textDarkColor};
`

const SharedWrapper = styled(View)`
  flex: 1;
  width: 100%;
  margin-top: 48px;
  padding: 22px 16px;
  background-color: ${BeigeSecondColor};
`

const SharedHeader = styled(View)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-bottom: 24px;
  border-bottom-width: 1px;
  border-bottom-color: ${BeigeThirdColor};
`

const TitleText = styled(Title)`
  color: ${textDarkColor};
  font-size: 17px;
  font-weight: bold;
`

const CounterText = styled(Caption)`
  font-size: 14px;
  color: ${primaryColor};
`

const StoryWrapper = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding: 14px 24px;
  border-bottom-width: 1px;
  border-bottom-color: ${BeigeThirdColor};
`

const VerticalContainer = styled(View)`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

const StoryTitle = styled(Title)`
  font-size: 15px;
  font-weight: bold;
  color: ${textDarkColor};
`

const StoryAuthor = styled(Caption)`
  font-size: 12px;
  color: ${textCaptionColor};
`

const StoryRunningTime = styled(Caption)`
  font-size: 13px;
  color: ${textCaptionColor};
`

const RenderStory = ({item}) =>
	<StoryWrapper>
		<VerticalContainer>
			<StoryTitle>{item.title}</StoryTitle>
			<StoryAuthor>{item.author}</StoryAuthor>
		</VerticalContainer>
		<StoryRunningTime>{item.runningTime}</StoryRunningTime>
	</StoryWrapper>

const GuestProfile = () =>
	<PageWrapper>
		<HeaderNotiMoreLight title={'게스트 프로필'}/>

		<ThumbnailImage
			width={100}
			source={require('../../../../assets/mypage/user/guest.png')}
		/>
		<ThumbnailCaption>친구</ThumbnailCaption>

		<SharedWrapper>
			<SharedHeader>
				<TitleText>공유한 이야기</TitleText>
				<CounterText>3개</CounterText>
			</SharedHeader>
			<FlatList data={data} renderItem={RenderStory}/>
		</SharedWrapper>

		<StatusBar barStyle="dark-content" backgroundColor={backgroundSecondaryColor}/>
	</PageWrapper>

export default GuestProfile