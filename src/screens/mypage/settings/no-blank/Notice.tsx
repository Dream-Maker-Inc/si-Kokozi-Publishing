import React from 'react'
import styled from '@emotion/native'
import {Paragraph, Subheading} from 'react-native-paper'
import {backgroundColor, primaryColor, secondaryColor, textDarkColor} from '../../../../common/Colors'
import {FlatList} from 'react-native'
import {noticeData, notificationData} from './data/data'

const PageWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${backgroundColor};
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
  border-bottom-color: ${secondaryColor};
`
const ItemTextContainer = styled.View`
  display: flex;
  flex-grow: 1;
`

const ItemDate = styled(Paragraph)`
  color: ${primaryColor};
  font-weight: bold;
`

const ItemTitle = styled(Subheading)`
  color: ${textDarkColor};
  font-weight: bold;
`

const ItemContent = styled(Subheading)`
  color: ${textDarkColor};
`

const Arrow = styled.Image`
  width: 24px;
  height: 24px;
  margin-right: 20px;
`

const RenderItem = ({item}) => <>
	<ListItem>
		<ItemTextContainer>
			<ItemDate>{item.date.toString()}</ItemDate>
			<ItemTitle>{item.title}</ItemTitle>
			<ItemContent>{item.content}</ItemContent>
		</ItemTextContainer>
		<Arrow source={require('../../../../../assets/mypage/arrow-right.png')}/>
	</ListItem>
</>

const Notice = () => {
	return <PageWrapper>
		<FlatList data={noticeData} renderItem={RenderItem}/>
	</PageWrapper>
}

export default Notice