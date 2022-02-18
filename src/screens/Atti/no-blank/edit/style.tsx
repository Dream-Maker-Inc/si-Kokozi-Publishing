import styled from '@emotion/native'
import {
	BeigeSecondColor,
	backgroundSecondaryColor,
	primaryColor,
	secondaryColor,
	textCaptionColor,
	textDarkColor
} from '../../../../common/Colors'
import {Headline, Paragraph, Subheading, Text, Title} from 'react-native-paper'
import {TouchableOpacity, View} from 'react-native'

export const ProfileWrapper = styled.View`
  position: relative;
  background-color: ${backgroundSecondaryColor};
`

export const ArtiImage = styled.Image`
  margin: 0 auto;
  width: 40%;
`

export const ImageCaptionText = styled(Title)`
  display: flex;
  align-items: center;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
`

export const EditButton = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`

export const ImageCaptionDescription = styled(Paragraph)`
  text-align: center;
  margin-bottom: 30px;
`

export const StoryWrapper = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${BeigeSecondColor};
`

export const Header = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const StoryHeadline = styled(Headline)`
  font-weight: bold;
  color: ${textDarkColor};
`

export const StorySubheading = styled(Subheading)`
  color: ${primaryColor};
  font-weight: bold;
`

export const ButtonWrapper = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`

export const RepeatButton = styled(TouchableOpacity)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
  padding: 10px;
  margin-right: 10px;
  background-color: ${secondaryColor};
  border-radius: 4px;
`

export const ShuffleButton = styled(TouchableOpacity)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
  padding: 10px;
  margin-left: 10px;
  background-color: ${secondaryColor};
  border-radius: 4px;
`

export const RepeatImage = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`

export const ButtonText = styled(Subheading)`
  color: ${textCaptionColor};
`

export const ItemNumber = styled(Subheading)`
  color: ${primaryColor};
  font-weight: bold;
`

export const StoryListWrapper = styled(View)`
  background-color: ${BeigeSecondColor};
`

export const StoryItem = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-grow: 1;
  height: 80px;
  margin: 0 30px;

  background-color: ${BeigeSecondColor};
  border-bottom-color: ${secondaryColor};
  border-bottom-width: 1px;
`

export const StoryTextContainer = styled(View)`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
`

export const StoryInfoContainer = styled(View)`
  display: flex;
  align-items: center;
  flex-direction: row;
`

export const ItemTitle = styled(Subheading)`
  color: ${textDarkColor};
  margin-left: 40px;
`

export const ItemRunningTime = styled(Text)`
  color: ${textCaptionColor};
  margin-right: 20px;
`

export const ItemPlayButton = styled.Image`
  width: 30px;
  height: 30px;
`