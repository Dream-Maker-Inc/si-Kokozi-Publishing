import React from 'react'
import styled from '@emotion/native'
import {TouchableOpacity} from 'react-native'
import ImagePaths from '../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {MyStoryData} from '../../../../screens/story/no-blank/data/story'
import {BeigeFifthColor, BeigeThirdColor, navyColor} from '../../../../common/Colors'

const MyStoryWrapper = styled.View`
  display: flex;
`

const Header = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  height: 74px;
  padding: 0 16px;
`

const HeaderTitleText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${navyColor};
`

const HeaderCaptionText = styled.Text`
  font-size: 12px;
  color: ${BeigeFifthColor};
`

const ListItemWrapper = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 68px;
  border-top-color: ${BeigeThirdColor};
  border-top-width: 1px;
  padding: 0 24px;
`

const VerticalView = styled.View`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
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
			<RunningTimeText>{data.runningTime}</RunningTimeText>
			<AutoHeightImage width={24} source={ImagePaths.components.icons.moreBeige}/>
		</CaptionView>
	</ListItemWrapper>

const renderMyStory =
	<MyStoryWrapper>
		<Header>
			<HeaderTitleText>내 이야기</HeaderTitleText>
			<TouchableOpacity>
				<HeaderCaptionText>전체보기</HeaderCaptionText>
			</TouchableOpacity>
		</Header>
		{MyStoryData.map(data => renderMyStoryListItem(data))}
	</MyStoryWrapper>

export default renderMyStory