import React from 'react'
import styled from '@emotion/native'
import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../common/ImagePaths'
import {navyColor} from '../../../common/Colors'

const ItemContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  width: 112px;
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

const BigVerticalListItem = () =>
	<ItemContainer>
		<ThumbnailImage source={ImagePaths.arti.all.thumbnail} width={112}/>
		<TitleText>이야기 플레이리스트</TitleText>
	</ItemContainer>

export default BigVerticalListItem