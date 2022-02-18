import React from 'react'
import HeaderBackEditLight from '../../../../components/header/light/HeaderBackEditLight'
import {backgroundSecondaryColor} from '../../../../common/Colors'
import {ScrollView, StatusBar, StyleSheet, TouchableOpacity} from 'react-native'
import PageBottomPlayerBlank from '../../../../components/player/PageBottomPlayerBlank'
import {storyData} from '../detail/data'
import {
	ArtiImage,
	ButtonText,
	ButtonWrapper,
	EditButton,
	Header,
	ImageCaptionDescription,
	ImageCaptionText,
	ItemNumber,
	ItemPlayButton,
	ItemRunningTime,
	ItemTitle,
	ProfileWrapper,
	RepeatButton,
	RepeatImage,
	ShuffleButton,
	StoryHeadline,
	StoryInfoContainer,
	StoryItem,
	StoryListWrapper,
	StorySubheading,
	StoryTextContainer,
	StoryWrapper
} from './style'

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
		<ImageCaptionText>매직아띠
			<TouchableOpacity>
				<EditButton resizeMode="contain" source={require('../../../../../assets/atti/edit/edit.png')}/>
			</TouchableOpacity>
		</ImageCaptionText>
		<ImageCaptionDescription>플레이리스트 A</ImageCaptionDescription>
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
				<ItemPlayButton resizeMode="contain" source={require('../../../../../assets/atti/edit/handle.png')}/>
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
		<ButtonWrapper>
			<RepeatButton>
				<RepeatImage resizeMode="contain"
							 source={require('../../../../../assets/atti/detail/repeat.png')}/>
				<ButtonText>반복재생</ButtonText>
			</RepeatButton>
			<ShuffleButton>
				<RepeatImage resizeMode="contain"
							 source={require('../../../../../assets/atti/detail/shuffle.png')}/>
				<ButtonText>셔플재생</ButtonText>
			</ShuffleButton>
		</ButtonWrapper>
	</StoryWrapper>
</>

const Edit = () => <>
	<HeaderBackEditLight title="아띠 프로필"/>
	<ScrollView>
		{renderProfile}
		{renderStory}
		{renderStoryList}
	</ScrollView>
	<PageBottomPlayerBlank/>
	<StatusBar barStyle="dark-content" backgroundColor={backgroundSecondaryColor}/>
</>

export default Edit