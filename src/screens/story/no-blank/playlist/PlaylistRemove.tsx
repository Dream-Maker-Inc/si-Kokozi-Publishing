import React from 'react'
import styled from '@emotion/native'
import {FlatList} from 'react-native'
import {PlaylistData} from '../../../../data/Data'
import ImagePaths from '../../../../common/ImagePaths'
import {BeigeSecondColor} from '../../../../common/Colors'
import ListItem from '../../../../components/list-items/components/ListItem'

const PageWrapper = styled.SafeAreaView`
  width: 100%;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const PlaylistRemove = () =>
	<PageWrapper>
		<FlatList data={PlaylistData}
				  renderItem={({item}) =>
					  <ListItem
						  key={item.name}
						  thumbnail={ImagePaths.arti.all.thumbnail}
						  title={item.name}
						  caption={item.date + '  ' + item.count + '개  ' + item.time + '분'}
						  right="checkbox"
					  />
				  }
		/>
	</PageWrapper>

export default PlaylistRemove