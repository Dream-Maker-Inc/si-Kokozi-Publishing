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

const VerticalListItem = () =>
	<ItemContainer>
		<ThumbnailImage source={ImagePaths.arti.all.thumbnail} width={56}/>
		<TitleText>게스트A</TitleText>
	</ItemContainer>

export default VerticalListItem