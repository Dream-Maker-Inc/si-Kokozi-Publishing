import React from 'react'
import styled from '@emotion/native'
import {MyStoryData} from '../data/story'
import {SafeAreaView} from 'react-native'
import {BeigeSecondColor} from '../../../../common/Colors'
import Picker from '../../../../components/global/picker/Picker'
import CustomHeader from '../../../../components/global/header/CustomHeader'
import ListItem from '../../../../components/list-items/components/ListItem'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const PickerWrapper = styled.View`
  display: flex;
  flex-direction: row;
`

const MyStory = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="내 이야기" right="record"/>
		<PickerWrapper>
			<Picker defaultText="모든 이야기"/>
			<Picker defaultText="최신순"/>
		</PickerWrapper>
		{MyStoryData.map(data =>
			<ListItem title={data.title} caption={data.host} time={data.time} right="more"/>
		)}
	</PageWrapper>


export default MyStory