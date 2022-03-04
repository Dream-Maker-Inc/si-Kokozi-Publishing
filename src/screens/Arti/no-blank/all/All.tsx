import React from 'react'
import styled from '@emotion/native'
import {FlatList} from 'react-native'
import {ArtiData} from '../../../../data/Data'
import {BeigeSecondColor} from '../../../../common/Colors'
import TwoColumnsListItem from '../../../../components/list-items/TwoColumnsListItem'

const PageWrapper = styled.SafeAreaView`
  background-color: ${BeigeSecondColor};
`

const All = () =>
	<PageWrapper>
		<FlatList
			data={ArtiData}
			numColumns={2}
			renderItem={TwoColumnsListItem}
			showsVerticalScrollIndicator={false}
		/>
	</PageWrapper>

export default All