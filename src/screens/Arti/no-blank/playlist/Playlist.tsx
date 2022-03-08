import React from 'react'
import styled from '@emotion/native'
import {BeigeSecondColor} from '../../../../common/Colors'
import {FlatList, SafeAreaView} from 'react-native'
import CustomHeader from '../../../../components/global/header/CustomHeader'
import {PlaylistData} from '../../../../data/Data'
import ListItem from '../../../../components/list-items/components/ListItem'
import ImagePaths from '../../../../common/ImagePaths'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const Playlist = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="플레이리스트"/>
		<FlatList data={PlaylistData}
				  renderItem={({item}) =>
					  <ListItem
						  key={item.name}
						  thumbnail={ImagePaths.arti.all.thumbnail}
						  title={item.name}
						  caption={item.date}
						  right="arrow"
					  />
				  }
		/>
	</PageWrapper>

export default Playlist