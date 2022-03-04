import React from 'react'
import styled from '@emotion/native'
import {MyStoryData} from '../data/story'
import {SafeAreaView} from 'react-native'
import ImagePaths from '../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import CustomHeader from '../../../../components/global/header/CustomHeader'
import {BeigeFifthColor, BeigeSecondColor, BeigeThirdColor, navyColor} from '../../../../common/Colors'
import renderGuestStoryProfile from '../../../../components/sub/story/story-main/RenderGuestStoryProfile'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ListItemWrapper = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 68px;
  border-bottom-color: ${BeigeThirdColor};
  border-bottom-width: 1px;
  padding: 0 24px;
`

const VerticalView = styled.View`
  display: flex;
  flex-direction: column;
`

const TitleText = styled.Text`
  font-size: 15px;
  color: ${navyColor};
`

const HostText = styled.Text`
  font-size: 12px;
  margin-top: 4px;
  color: ${BeigeFifthColor};
`

const CaptionView = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`

const RunningTimeText = styled.Text`
  font-size: 13px;
  margin-right: 8px;
  color: ${BeigeFifthColor};
`


type MyStoryListItemModel = {
	title: string,
	host: string,
	runningTime: string
}

const renderMyStoryListItem = (data: MyStoryListItemModel) =>
	<ListItemWrapper>
		<VerticalView>
			<TitleText>{data.title}</TitleText>
			<HostText>{data.host}</HostText>
		</VerticalView>
		<CaptionView>
			<RunningTimeText>{data.time}</RunningTimeText>
			<AutoHeightImage width={24} source={ImagePaths.components.icons.moreBeige}/>
		</CaptionView>
	</ListItemWrapper>

const GuestStory = () => {
	return <PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="게스트 이야기"/>
		{renderGuestStoryProfile}
		{MyStoryData.map(data => renderMyStoryListItem(data))}
	</PageWrapper>
}

export default GuestStory