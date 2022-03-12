import React from 'react'
import styled from '@emotion/native'
import {FlatList, SafeAreaView} from 'react-native'
import {BeigeSecondColor, BeigeThirdColor, primaryColor} from '../../../../common/Colors'
import CustomHeader from '../../../../components/global/header/CustomHeader'
import {PlaylistData} from '../data/playlist'
import ListItem from '../../../../components/list-items/components/ListItem'
import ImagePaths from '../../../../common/ImagePaths'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ButtonWrapper = styled.View`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90px;
  bottom: 0;
  border-top-width: 1px;
  border-top-color: ${BeigeThirdColor};
`

const RemoveButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 48px;
  border-radius: 8px;
  background-color: ${primaryColor};
`

const RemoveButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
`

const StyledList = styled(FlatList)`
  padding: 16px;
`

const AddToPlaylist = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="플레이리스트에 담기"/>
		<StyledList data={PlaylistData}
			renderItem={({item}) =>
				<ListItem
					thumbnail={ImagePaths.arti.all.thumbnail}
					title={item.title}
					caption={item.date + '  ' + item.count + '개  ' + item.time + '분'}
					right="checkbox"
				/>
			}
		/>
		<ButtonWrapper>
			<RemoveButton>
				<RemoveButtonText>담기</RemoveButtonText>
			</RemoveButton>
		</ButtonWrapper>
	</PageWrapper>

export default AddToPlaylist