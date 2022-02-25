import React from 'react'
import styled from '@emotion/native'
import {FlatList} from 'react-native'
import {navyColor} from '../../../../../common/Colors'
import ImagePaths from '../../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {GuestData} from '../../../../../data/Data'

const ListWrapper = styled.View`
  height: 130px;
`

const ListItemWrapper = styled.View`
  margin: 24px 8px 8px 16px;
`

const ItemImage = styled(AutoHeightImage)`
  border-radius: 4px;
`

const ItemText = styled.Text`
  font-size: 12px;
  margin-top: 8px;
  text-align: center;
  color: ${navyColor};
`

const guestListData = [
	{
		image: ImagePaths.arti.all.thumbnail,
		name: '게스트002'
	},
	{
		image: ImagePaths.arti.all.thumbnail,
		name: '게스트A'
	},
	{
		image: ImagePaths.arti.all.thumbnail,
		name: '게스트B'
	},
	{
		image: ImagePaths.arti.all.thumbnail,
		name: '게스트C'
	},
	{
		image: ImagePaths.arti.all.thumbnail,
		name: '게스트002'
	},
	{
		image: ImagePaths.arti.all.thumbnail,
		name: '게스트A'
	},
	{
		image: ImagePaths.arti.all.thumbnail,
		name: '게스트B'
	},
	{
		image: ImagePaths.arti.all.thumbnail,
		name: '게스트C'
	},
]

const RenderGuestListItem = ({item}) => {
	return <ListItemWrapper key={item.name}>
		<ItemImage width={56} source={item.image}/>
		<ItemText>{item.name}</ItemText>
	</ListItemWrapper>
}

const renderGuestList =
	<ListWrapper>
		<FlatList
			horizontal
			data={GuestData}
			renderItem={RenderGuestListItem}
			showsHorizontalScrollIndicator={false}
		/>
	</ListWrapper>

export default renderGuestList