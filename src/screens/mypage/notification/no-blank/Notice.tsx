import React from 'react'
import styled from '@emotion/native'
import {noticeData} from '../../../../data/notificationData'
import {FlatList, Text} from 'react-native'
import ImagePaths from '../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeSecondColor, BeigeThirdColor, navyColor, primaryColor} from '../../../../common/Colors'

const PageWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ListItem = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;

  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;

  border: none;
  border-bottom-width: 1px;
  border-bottom-color: ${BeigeThirdColor};
`
const ItemTextContainer = styled.View`
  display: flex;
  flex-grow: 1;
`

const ItemDate = styled(Text)`
  color: ${primaryColor};
  font-size: 14px;
  font-weight: bold;
`

const ItemTitle = styled(Text)`
  color: ${navyColor};
  margin-top: 4px;
  font-size: 14px;
  font-weight: bold;
`

const ItemContent = styled(Text)`
  color: ${navyColor};
  font-size: 14px;
`

const Arrow = styled(AutoHeightImage)`
  margin-right: 20px;
`

const RenderItem = ({item}) =>
	<ListItem key={item.title}>
		<ItemTextContainer>
			<ItemDate>{item.date}</ItemDate>
			<ItemTitle>{item.title}</ItemTitle>
			<ItemContent>{item.content}</ItemContent>
		</ItemTextContainer>
		<Arrow width={24} source={ImagePaths.components.icons.arrowRight}/>
	</ListItem>

const Notice = () =>
	<PageWrapper>
		<FlatList data={noticeData} renderItem={RenderItem}/>
	</PageWrapper>


export default Notice