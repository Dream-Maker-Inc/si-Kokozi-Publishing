import React from 'react'
import styled from '@emotion/native'
import ImagePaths from '../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeFifthColor, BeigeThirdColor, navyColor, primaryColor} from '../../common/Colors'

const ListItem = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px 7px;
  height: 72px;
  border-bottom-width: 1px;
  border-bottom-color: ${BeigeThirdColor};
`

const NumberText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${primaryColor};
`

const LeftContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 100%;
`

const VerticalView = styled.View`
  margin-left: 24px;
`

const TitleText = styled.Text`
  font-size: 15px;
  color: ${navyColor};
`

const CaptionText = styled.Text`
  font-size: 12px;
  margin-top: 4px;
  color: ${BeigeFifthColor};
`

const RightContainer = styled.View``

const PlayingListItem = ({item}) =>
	<ListItem key={item.index.toString()}>
		<LeftContainer>
			<NumberText>{item.index}</NumberText>
			<VerticalView>
				<TitleText>{item.title}</TitleText>
				<CaptionText>{item.author}</CaptionText>
			</VerticalView>
		</LeftContainer>
		<RightContainer>
			<AutoHeightImage source={ImagePaths.components.icons.sound} width={32}/>
		</RightContainer>
	</ListItem>


export default PlayingListItem