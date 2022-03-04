import React from 'react'
import styled from '@emotion/native'
import {Text, TouchableOpacity} from 'react-native'
import {BeigeThirdColor, navyColor} from '../../common/Colors'

const ListItem = styled(TouchableOpacity)`
  width: 100%;
  padding: 22px 24px;
  border-top-width: 1px;
  border-top-color: ${BeigeThirdColor};
`
const ItemText = styled(Text)`
  font-size: 16px;
  color: ${navyColor};
`
const TextListItem = ({item}) =>
	<ListItem key={item.index}>
		<ItemText>{item.name}</ItemText>
	</ListItem>

export default TextListItem