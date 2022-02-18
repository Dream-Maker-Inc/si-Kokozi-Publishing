import React from 'react'
import {backgroundSecondaryColor} from '../../../../common/Colors'
import {ScrollView, StatusBar, StyleSheet, Text} from 'react-native'
import {
	ArtiImage, ButtonText,
	ChangeButton,
	ChangeButtonContainer,
	Header,
	ImageCaptionText,
	ImageTitleText,
	ItemNumber,
	ItemRunningTime,
	ItemTitle,
	ProfileWrapper,
	StoryHeadline,
	StoryInfoContainer,
	StoryItem,
	StoryListWrapper,
	StorySubheading,
	StoryTextContainer,
	StoryWrapper
} from './style'
import {storyData} from '../detail/data'
import HeaderBackLight from '../../../../components/header/light/HeaderBackLight'

const styles = StyleSheet.create({
	container: {
		shadowColor: '#999',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	}
})

const renderProfile = <>
	<ProfileWrapper>
		<ArtiImage
			resizeMode="contain"
			source={require('../../../../../assets/atti/detail/thumbnail.png')}/>
		<ImageTitleText>플레이리스트 A</ImageTitleText>
		<ImageCaptionText>내가 좋아하는 전래동화 모음</ImageCaptionText>
	</ProfileWrapper>
</>

const renderStoryList = <StoryListWrapper>
	{storyData.map(item => (
		<StoryItem>
			<StoryTextContainer>
				<ItemNumber>0{item.number}</ItemNumber>
				<ItemTitle>{item.title}</ItemTitle>
			</StoryTextContainer>
			<StoryInfoContainer>
				<ItemRunningTime>{item.runningTime}</ItemRunningTime>
			</StoryInfoContainer>
		</StoryItem>
	))}
</StoryListWrapper>

const renderStory = <>
	<StoryWrapper>
		<Header>
			<StoryHeadline>이야기</StoryHeadline>
			<StorySubheading>총 46분 37초</StorySubheading>
		</Header>
	</StoryWrapper>
</>

const Detail = () => <>
	<HeaderBackLight title="플레이리스트"/>
	<ScrollView>
		{renderProfile}
		{renderStory}
		{renderStoryList}
	</ScrollView>
	<ChangeButtonContainer>
		<ChangeButton>
			<ButtonText>교체하기</ButtonText>
		</ChangeButton>
	</ChangeButtonContainer>
	<StatusBar barStyle="dark-content" backgroundColor={backgroundSecondaryColor}/>
</>

export default Detail