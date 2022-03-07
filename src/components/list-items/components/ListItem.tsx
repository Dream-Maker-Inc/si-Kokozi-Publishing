import React from 'react'
import styled from '@emotion/native'
import {Checkbox} from 'react-native-paper'
import ImagePaths from '../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeFifthColor, BeigeThirdColor, navyColor, primaryColor} from '../../../common/Colors'

const ItemContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding: 14px 7px;
  border-bottom-color: ${BeigeThirdColor};
  border-bottom-width: 1px;
`

const NumberText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${primaryColor};
`

const TextContainer = styled.View`
  display: flex;
  flex: 1;
  margin-left: 24px;
`

const ThumbnailImage = styled(AutoHeightImage)`
  border-radius: 4px;
`

const TitleText = styled.Text`
  font-size: 15px;
  color: ${navyColor};
`

const CaptionText = styled.Text`
  font-size: 12px;
  color: ${BeigeFifthColor};
`

const NewIcon = styled(AutoHeightImage)`
  margin-right: 16px;
`

const IconContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`

const TimeText = styled.Text`
  font-size: 12px;
  margin-right: 14px;
  color: ${BeigeFifthColor};
`

type ListItemModel = {
	thumbnail?: string;
	prefix?: string;
	title: string;
	caption?: string;
	time?: string;
	newIcon?: boolean;
	right?:
		| 'more'
		| 'handler'
		| 'checkbox'
		| 'play'
		| 'both'
		| 'arrow'
}

const ListItem = (props: ListItemModel) =>
	<ItemContainer>

		{props.prefix && <NumberText>{props.prefix}</NumberText>}
		{props.thumbnail && <ThumbnailImage source={props.thumbnail} width={80}/>}

		<TextContainer>
			<TitleText>{props.title}</TitleText>
			{props.caption && <CaptionText>{props.caption}</CaptionText>}
		</TextContainer>

		<IconContainer>
			{props.newIcon && <NewIcon source={ImagePaths.components.icons.new} width={41}/>}
			{props.time && <TimeText>{props.time}</TimeText>}
			{props.right === 'more' && <AutoHeightImage source={ImagePaths.components.icons.moreBeige} width={34}/>}
			{props.right === 'checkbox' && <Checkbox color={primaryColor} status="unchecked"/>}
			{props.right === 'handler' && <AutoHeightImage source={ImagePaths.components.icons.handle} width={24}/>}
			{props.right === 'play' && <AutoHeightImage source={ImagePaths.components.icons.play} width={24}/>}
			{props.right === 'arrow' && <AutoHeightImage source={ImagePaths.components.icons.arrowRight} width={24}/>}

			{props.right === 'both' &&
				<>
					<Checkbox color={primaryColor} status="unchecked"/>
					<AutoHeightImage source={ImagePaths.components.icons.handle} width={24}/>
				</>
			}
		</IconContainer>

	</ItemContainer>

export default ListItem