import React from 'react'
import styled from '@emotion/native'
import {Text, TouchableOpacity} from 'react-native'
import ImagePaths from '../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {settingListData} from '../../../../screens/mypage/data'
import {BeigeThirdColor, navyColor} from '../../../../common/Colors'

export const Divider = styled.View`
  width: 100%;
  height: 6px;
  background-color: ${BeigeThirdColor};
`

const ListContainer = styled.View`
  width: 100%;
`

const ListTitle = styled(Text)`
  font-weight: bold;
  font-size: 17px;
  margin: 20px;
  color: ${navyColor};
`

const ListItemContainer = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 40px;
  margin: 20px 24px 0;

  border: none;
  border-bottom-width: 1px;
  border-color: ${BeigeThirdColor};
`

const ListItem = styled(Text)`
  flex-grow: 1;
  justify-content: center;
  color: ${navyColor};
  padding-bottom: 20px;
  height: 100%;
  font-size: 14px;
`

type ItemModel = {
	title: string,
	item: string[]
}

const RenderItem = (item: ItemModel) =>
	<>
		<ListTitle>{item.title}</ListTitle>
		{item.item.map(list =>
			<ListItemContainer key={item.title}>
				<ListItem>{list}</ListItem>
				<AutoHeightImage width={24} source={ImagePaths.components.icons.arrowRight}/>
			</ListItemContainer>
		)}
		<Divider/>
	</>

const renderList =
	<ListContainer>
		{settingListData.map(item => RenderItem(item))}
	</ListContainer>

export default renderList