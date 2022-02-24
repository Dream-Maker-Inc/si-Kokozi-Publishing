import React from 'react'
import styled from '@emotion/native'
import {Checkbox} from 'react-native-paper'
import {Text, TouchableOpacity} from 'react-native'
import ImagePaths from '../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeFifthColor, BeigeThirdColor, navyColor, primaryColor} from '../../../../common/Colors'

const ListItemWrapper = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-grow: 1;
  height: 100px;
`

const ItemContents = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-grow: 1;
  height: 100%;
  margin: 20px;
  border-bottom-width: 1px;
  border-bottom-color: ${BeigeThirdColor};
`

const ItemImage = styled(AutoHeightImage)`
  margin-left: 20px;
  border-radius: 4px;
`

const TextContainer = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 8px;
`

const TitleText = styled(Text)`
  color: ${navyColor};
  font-size: 15px;
  font-weight: bold;
`

const CaptionContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`

const CaptionText = styled(Text)`
  color: ${BeigeFifthColor};
  font-size: 12px;
  margin-top: 8px;
  margin-right: 8px;
`

const RenderPlaylistListItem = ({item}) =>
	<ListItemWrapper key={item.title}>
		<ItemImage width={80} source={ImagePaths.arti.playlist.thumbnail}/>

		<ItemContents>
			<TextContainer>
				<TitleText>{item.title}</TitleText>
				<CaptionContainer>
					<CaptionText>{item.date}</CaptionText>
					<CaptionText>{item.count}개</CaptionText>
					<CaptionText>{item.runningTime}분</CaptionText>
				</CaptionContainer>
			</TextContainer>
			<Checkbox color={primaryColor} status="checked"/>
		</ItemContents>

	</ListItemWrapper>

export default RenderPlaylistListItem