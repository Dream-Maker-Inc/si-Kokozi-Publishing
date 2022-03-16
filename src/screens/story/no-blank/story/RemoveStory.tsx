import React from 'react'
import styled from '@emotion/native'
import {MyStoryData} from '../data/story'
import {SafeAreaView} from 'react-native'
import CustomHeader from '../../../../components/global/header/CustomHeader'
import ListItem from '../../../../components/list-items/components/ListItem'
import {BeigeSecondColor, BeigeThirdColor, PlumColor} from '../../../../common/Colors'
import Picker from '../../../../components/global/picker/Picker'

const PageWrapper = styled(SafeAreaView)`
  position: relative;
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
  background-color: ${PlumColor};
`

const RemoveButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
`

const PickerWrapper = styled.View`
  display: flex;
  flex-direction: row;
`

const RemoveStory = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="이야기 삭제"/>
		<PickerWrapper>
			<Picker defaultText="모든 이야기"/>
			<Picker defaultText="최신순"/>
		</PickerWrapper>
		{MyStoryData.map(data =>
			<ListItem title={data.title} caption={data.host} time={data.time} right="checkbox"/>
		)}
		<ButtonWrapper>
			<RemoveButton>
				<RemoveButtonText>삭제하기</RemoveButtonText>
			</RemoveButton>
		</ButtonWrapper>
	</PageWrapper>

export default RemoveStory