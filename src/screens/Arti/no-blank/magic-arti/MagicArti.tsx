import React, {useState} from 'react'
import {FlatList, StyleSheet} from 'react-native'
import styled from '@emotion/native'

import {BeigeFirstColor, BeigeSecondColor, BeigeThirdColor} from '../../../../common/Colors'
import ImagePaths from '../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'

const PageWrapper = styled.SafeAreaView`
  background-color: ${BeigeSecondColor};
`

const ListItem = styled.TouchableOpacity`
  flex-grow: 1;

  margin: 14px;

  border-radius: 20px;
  background-color: ${BeigeThirdColor};
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
  font-weight: bold;
  text-align: center;
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

const MagicArti = () => {
	const [dataSource, setDataSource] = useState([])

	useState(() => {
		const items = Array
			.apply(null, Array(10))
			.map((v, i) => {
				return {
					id: i,
					src: ImagePaths.arti.all.thumbnail
				}
			})
		setDataSource(items)
	}, [])

	return <PageWrapper>
		<FlatList
			data={dataSource}
			numColumns={2}
			renderItem={() => (
				<ListItem>
					<AutoHeightImage width={100} source={ImagePaths.arti.all.thumbnail}/>
					<ItemTextContainer style={styles.container}>
						<ItemText>코코지</ItemText>
					</ItemTextContainer>
				</ListItem>
			)}
		/>
	</PageWrapper>
}

export default MagicArti