import React from 'react'
import styled from '@emotion/native'
import {StyleSheet} from 'react-native'
import ImagePaths from '../../common/ImagePaths'
import {BeigeFirstColor, BeigeThirdColor} from '../../common/Colors'

const ListItem = styled.TouchableOpacity`
  flex-grow: 1;
  margin: 14px;
  border-radius: 20px;
  background-color: ${BeigeThirdColor};
`

const ThumbnailImage = styled.Image`
  width: 156px;
  height: 172px;
`

const ItemTextContainer = styled.View`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 60px;

  background-color: ${BeigeFirstColor};

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

const ItemText = styled.Text`
  text-align: center;
  font-size: 15px;
`

const styles = StyleSheet.create({
	container: {
		shadowColor: '#999',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	}
})

const TwoColumnsListItem = ({item}) =>
	<ListItem key={item.index}>
		<ThumbnailImage resizeMode="contain" source={ImagePaths.arti.all.thumbnail}/>
		<ItemTextContainer style={styles.container}>
			<ItemText>{item.name}</ItemText>
		</ItemTextContainer>
	</ListItem>

export default TwoColumnsListItem