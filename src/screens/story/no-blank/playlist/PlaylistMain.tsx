import React from 'react'
import styled from '@emotion/native'
import {FlatList} from 'react-native'
import {PlaylistData} from '../../../../data/Data'
import ImagePaths from '../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeSecondColor, primaryColor} from '../../../../common/Colors'
import ListItem from '../../../../components/list-items/components/ListItem'

const PageWrapper = styled.SafeAreaView`
  width: 100%;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const HeaderContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 56px;
  padding: 0 16px;
`

const HeaderText = styled.Text`
  color: ${primaryColor};
  font-size: 13px;
  margin-left: 8px;
`

const renderPlaylist =
	<FlatList data={PlaylistData}
			  renderItem={({item}) =>
				  <ListItem
					  key={item.name}
					  thumbnail={ImagePaths.arti.all.thumbnail}
					  title={item.name}
					  caption={item.date}
				  />
			  }
	/>

const PlaylistMain = () =>
	<PageWrapper>
		<HeaderContainer>
			<AutoHeightImage source={ImagePaths.components.icons.plus} width={24}/>
			<HeaderText>플레이리스트 만들기</HeaderText>
		</HeaderContainer>
		{renderPlaylist}
	</PageWrapper>

export default PlaylistMain