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

export const ImageTitleText = styled(Title)`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
`

export const ImageCaptionText = styled(Paragraph)`
  color: ${textCaptionColor};
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

export const ChangeButtonContainer = styled.View`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background-color: ${BeigeSecondColor};
  border-top-width: 1px;
  border-top-color: ${secondaryColor};
`

export const ChangeButton = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 60px;
  border-radius: 8px;
  background-color: ${primaryColor};
`

export const ButtonText = styled(Title)`
  color: white;
  font-weight: bold;
`