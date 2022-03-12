import React from 'react'
import styled from '@emotion/native'
import {FlatList} from 'react-native'
import {GuestData} from '../../../../../data/Data'
import ImagePaths from '../../../../../common/ImagePaths'
import VerticalListItem from '../../../../list-items/components/VerticalListItem'

const ListWrapper = styled.View`
  height: 120px;
  padding: 8px;
`

const renderGuestList =
	<ListWrapper>
		<FlatList
			horizontal
			data={GuestData}
			renderItem={({item}) =>
				<VerticalListItem
					image={ImagePaths.arti.all.thumbnail}
					title={item.name}
				/>
			}
			showsHorizontalScrollIndicator={false}
		/>
	</ListWrapper>

export default renderGuestList