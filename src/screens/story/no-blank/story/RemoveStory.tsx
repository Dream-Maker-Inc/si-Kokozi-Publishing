import React from 'react'
import styled from '@emotion/native'
import {MyStoryData} from '../data/story'
import {SafeAreaView} from 'react-native'
import CustomHeader from '../../../../components/global/header/CustomHeader'
import RenderFilter from '../../../../components/sub/story/my-story/RenderFilter'
import {
	BeigeFifthColor,
	BeigeSecondColor,
	BeigeThirdColor,
	navyColor,
	PlumColor,
	primaryColor
} from '../../../../common/Colors'
import {Checkbox} from 'react-native-paper'

const PageWrapper = styled(SafeAreaView)`
  position: relative;
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

const ButtonWrapper = styled.View`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90px;
  bottom: 0;
  border-top-width: 1px;
  border-top-color: ${BeigeThirdColor};
`

const RemoveButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 48px;
  border-radius: 8px;
  background-color: ${PlumColor};
`

const RemoveButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
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
			<Checkbox status="checked" color={primaryColor}/>
		</CaptionView>
	</ListItemWrapper>

const RemoveStory = () => {
	return <PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="이야기 삭제"/>
		<RenderFilter/>
		{MyStoryData.map(data => renderMyStoryListItem(data))}
		<ButtonWrapper>
			<RemoveButton>
				<RemoveButtonText>삭제하기</RemoveButtonText>
			</RemoveButton>
		</ButtonWrapper>
	</PageWrapper>
}

export default RemoveStory