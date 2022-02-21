import React from 'react'
import {FlatList, SafeAreaView, StatusBar, TouchableOpacity, View} from 'react-native'
import styled from '@emotion/native'
import {
	backgroundSecondaryColor,
	BeigeFifthColor,
	BeigeSecondColor,
	BeigeThirdColor,
	primaryColor,
	secondaryColor,
	textCaptionColor,
	textDarkColor
} from '../../common/Colors'
import {Caption, Headline, Subheading} from 'react-native-paper'
import {playlistData} from '../Atti/no-blank/playlist/data'
import {storyData} from '../Atti/no-blank/detail/data'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${backgroundSecondaryColor};
`

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 40px;
  margin: 0 16px;
`

const CloseButton = styled(Caption)`
  font-size: 13px;
`

const PlaylistProfileContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0 16px;
`

const Thumbnail = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 2px;
  background-color: ${BeigeThirdColor};
`

const ProfileTexts = styled.View`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  margin-left: 16px;
`

const PlaylistTitle = styled(Headline)`
  font-weight: bold;
  font-size: 16px;
  color: ${textDarkColor};
`

const PlaylistInfo = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: -10px;
`

const Count = styled(Caption)`
  font-size: 12px;
  color: ${BeigeFifthColor};
`

const RunningTime = styled(Caption)`
  font-size: 12px;
  color: ${BeigeFifthColor};
`

const ButtonWrapper = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 20px;
`

const RepeatButton = styled(TouchableOpacity)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
  padding: 10px;
  margin-right: 10px;
  background-color: ${BeigeSecondColor};
  border-radius: 4px;
`

const ShuffleButton = styled(TouchableOpacity)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
  padding: 10px;
  margin-left: 10px;
  background-color: ${BeigeSecondColor};
  border-radius: 4px;
`

const RepeatImage = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`

const ButtonText = styled(Subheading)`
  color: ${textCaptionColor};
`

const StoryListWrapper = styled(View)`
  background-color: ${backgroundSecondaryColor};
`

const Item = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-grow: 1;
  height: 80px;
  margin: 0 30px;

  background-color: ${backgroundSecondaryColor};
  border-bottom-color: ${secondaryColor};
  border-bottom-width: 1px;
`

const ItemNumber = styled(Subheading)`
  color: ${primaryColor};
  font-weight: bold;
`

const ItemInfo = styled.View`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  margin-left: 40px;
`

const ItemTitle = styled(Subheading)`
  color: ${textDarkColor};
`

const ItemAuthor = styled(Caption)`
  font-size: 12px;
  margin-top: -4px;
  color: ${BeigeFifthColor};
`

const renderHeader = <>
	<Header>
		<TouchableOpacity>
			<CloseButton>닫기</CloseButton>
		</TouchableOpacity>
	</Header>
</>

const renderProfile = <>
	<PlaylistProfileContainer>
		<Thumbnail
			resizeMode="contain"
			source={{uri: 'http://placehold.it/40x40.png'}}
		/>
		<ProfileTexts>
			<PlaylistTitle>게스트 플레이리스트</PlaylistTitle>
			<PlaylistInfo>
				<Count>이야기 6개</Count>
				<RunningTime>30분</RunningTime>
			</PlaylistInfo>
		</ProfileTexts>
	</PlaylistProfileContainer>
</>

const renderButtons = <>
	<ButtonWrapper>
		<RepeatButton>
			<RepeatImage
				resizeMode="contain"
				source={require('../../../assets/components/icons/repeat.png')}
			/>
			<ButtonText>반복재생</ButtonText>
		</RepeatButton>
		<ShuffleButton>
			<RepeatImage
				resizeMode="contain"
				source={require('../../../assets/components/icons/shuffle.png')}
			/>
			<ButtonText>셔플재생</ButtonText>
		</ShuffleButton>
	</ButtonWrapper>
</>

const renderListItem = () => <StoryListWrapper>
	{storyData.map((item, idx) => (
		<Item key={idx}>
			<ItemNumber>0{item.number}</ItemNumber>
			<ItemInfo>
				<ItemTitle>{item.title}</ItemTitle>
				<ItemAuthor>{item.title}</ItemAuthor>
			</ItemInfo>
		</Item>
	))}
</StoryListWrapper>

const renderList = <>
	<FlatList
		data={playlistData}
		renderItem={renderListItem}
	/>
</>

const Playlist = () =>
	<PageWrapper>
		{renderHeader}
		{renderProfile}
		{renderButtons}
		{renderList}
		<StatusBar
			barStyle="dark-content"
			backgroundColor={backgroundSecondaryColor}
		/>
	</PageWrapper>

export default Playlist
