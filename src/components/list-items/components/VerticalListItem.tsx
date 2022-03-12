import React from 'react'
import styled from '@emotion/native'
import AutoHeightImage from 'react-native-auto-height-image'
import {navyColor} from '../../../common/Colors'

const ItemContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  width: 56px;
  margin: 8px;
`

const ThumbnailImage = styled(AutoHeightImage)`
  border-radius: 4px;
`

const TitleText = styled.Text`
  font-size: 13px;
  margin-top: 8px;
  color: ${navyColor};
`

type VerticalListItemModel = {
	image: string,
	title: string
}

const VerticalListItem = (props: VerticalListItemModel) =>
	<ItemContainer>
		<ThumbnailImage source={props.image} width={56}/>
		<TitleText>{props.title}</TitleText>
	</ItemContainer>

export default VerticalListItem