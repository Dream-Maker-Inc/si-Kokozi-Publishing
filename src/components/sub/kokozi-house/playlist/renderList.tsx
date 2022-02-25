import {FlatList, TouchableOpacity, View} from 'react-native'
import React from 'react'
import styled from '@emotion/native'
import {BeigeFifthColor, BeigeFirstColor, BeigeThirdColor, navyColor, primaryColor} from '../../../../common/Colors'
import {Caption, Subheading} from 'react-native-paper'
import {PlaylistData, StoryData} from '../../../../data/Data'

const StoryListWrapper = styled(View)`
  background-color: ${BeigeFirstColor};
`

const Item = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-grow: 1;
  height: 80px;
  margin: 0 30px;

  background-color: ${BeigeFirstColor};
  border-bottom-color: ${BeigeThirdColor};
  border-bottom-width: 1px;
`

const ItemNumber = styled(Subheading)`
  color: ${primaryColor};
  font-weight: bold;
`

const ItemInfo = styled.View`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  margin-left: 40px;
`

const ItemTitle = styled(Subheading)`
  color: ${navyColor};
`

const ItemAuthor = styled(Caption)`
  font-size: 12px;
  margin-top: -4px;
  color: ${BeigeFifthColor};
`

const renderListItem = () =>
	<StoryListWrapper>
		{StoryData.map((item, idx) => (
			<Item key={idx}>
				<ItemNumber>{item.no}</ItemNumber>
				<ItemInfo>
					<ItemTitle>{item.title}</ItemTitle>
					<ItemAuthor>{item.title}</ItemAuthor>
				</ItemInfo>
			</Item>
		))}
	</StoryListWrapper>

const renderList =
	<FlatList data={PlaylistData} renderItem={renderListItem}/>

export default renderList