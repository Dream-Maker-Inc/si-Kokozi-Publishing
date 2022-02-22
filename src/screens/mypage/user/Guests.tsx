import React from 'react'
import {FlatList, SafeAreaView, StatusBar, TouchableOpacity} from 'react-native'
import styled from '@emotion/native'
import {BeigeSecondColor, secondaryColor, textDarkColor} from '../../../common/Colors'
import HeaderNotiMoreLight from '../../../components/header/light/HeaderNotiMoreLight'
import AutoHeightImage from 'react-native-auto-height-image'
import {Paragraph} from 'react-native-paper'

const data = [
	'할머니', '친구', '할아버지', 'English teacher', '안나'
]

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const GuestItemWrapper = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin: 0 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${secondaryColor};
`

const GuestItemThumbnail = styled(AutoHeightImage)`
  width: 56px;
  height: 56px;
  border-radius: 4px;
  background-color: ${secondaryColor};
`

const GuestItemTitle = styled(Paragraph)`
  font-size: 14px;
  margin-left: 16px;
  color: ${textDarkColor};
`

const RenderGuests = ({item}) =>
	<GuestItemWrapper>
		<GuestItemThumbnail
			source={{uri: 'http://placehold.it/56x56'}}
			width={56}
		/>
		<GuestItemTitle>{item}</GuestItemTitle>
	</GuestItemWrapper>

const Guests = () =>
	<PageWrapper>
		<HeaderNotiMoreLight title={'게스트 관리'}/>

		<FlatList data={data} renderItem={RenderGuests}/>

		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>

export default Guests