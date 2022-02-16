import React, {useState} from 'react'
import styled from '@emotion/native'
import {backgroundColor, secondaryColor} from '../../../../common/Colors'
import {FlatList, Text} from 'react-native'

const All = () => {
	const [dataSource, setDataSource] = useState([])

	useState(() => {
		const items = Array.apply(null, Array(60)).map((v, i) => {
			return {id: i, src: '../../../../../assets/atti/all/thumbnail.png'}
		})
		setDataSource(items)
	}, [])

	return <PageWrapper>
		<FlatList
			data={dataSource}
			numColumns={2}
			renderItem={() => (
				<ListItem>
					<ItemImage
						resizeMode="center"
						source={require('../../../../../assets/atti/all/thumbnail.png')}
					/>
					<ItemText>
						<Text>코코지</Text>
					</ItemText>
				</ListItem>
			)}
		/>
	</PageWrapper>
}

const PageWrapper = styled.SafeAreaView`
  flex: 1;
  padding: 10px;
  background-color: ${backgroundColor};
`

const ListItem = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  margin: 10px;

  border-radius: 20px;
  background-color: ${secondaryColor};
`

const ItemImage = styled.Image`
  width: 100px;
  height: 180px;
`

const ItemText = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 60px;

  font-weight: bold;
  background-color: white;

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

export default All