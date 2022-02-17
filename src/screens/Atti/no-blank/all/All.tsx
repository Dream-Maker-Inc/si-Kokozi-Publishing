import React, {useState} from 'react'
import {FlatList} from 'react-native'
import styled from '@emotion/native'

import {backgroundColor, playerBackgroundColor, secondaryColor} from '../../../../common/Colors'

const PageWrapper = styled.SafeAreaView`
  background-color: ${backgroundColor};
`

const ListItem = styled.TouchableOpacity`
  flex-grow: 1;

  margin: 14px;

  border-radius: 20px;
  background-color: ${secondaryColor};
`

const ItemImage = styled.Image`
  width: 100px;
  height: 180px;
`

const ItemTextContainer = styled.View`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 60px;

  background-color: ${playerBackgroundColor};

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

const ItemText = styled.Text`
  font-weight: bold;
  text-align: center;
`

const All = () => {
	const [dataSource, setDataSource] = useState([])

	useState(() => {
		const items = Array
			.apply(null, Array(10))
			.map((v, i) => {
				return {
					id: i,
					src: '../../../../../assets/atti/all/thumbnail.png'
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
					<ItemImage
						resizeMode="center"
						source={require('../../../../../assets/atti/all/thumbnail.png')}
					/>
					<ItemTextContainer
						style={{
							shadowColor: '#999',
							shadowOffset: {
								width: 0,
								height: 2,
							},
							shadowOpacity: 0.25,
							shadowRadius: 3.84,

							elevation: 5,
						}}>
						<ItemText>코코지</ItemText>
					</ItemTextContainer>
				</ListItem>
			)}
		/>
	</PageWrapper>
}

export default All