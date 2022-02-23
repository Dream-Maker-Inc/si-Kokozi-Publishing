import React from 'react'
import styled from '@emotion/native'
import AutoHeightImage from 'react-native-auto-height-image'
import {FlatList, SafeAreaView, StatusBar, Text, TouchableOpacity} from 'react-native'
import ImagePaths from '../../../../common/ImagePaths'
import {StepperSecond} from '../../../../components/global/stepper/Stepper'
import HeaderBackCloseDark from '../../../../components/global/header/dark/HeaderBackCloseDark'
import {BeigeSecondColor, BeigeThirdColor, navyColor, primaryColor} from '../../../../common/Colors'

const WifiListData = [
	'kokozi wifi',
	'mywifi-2.5G',
	'fee-wifi',
	'iptime'
]

const PageWrapper = styled(SafeAreaView)`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const TitleImage = styled(AutoHeightImage)`
  margin-top: 16px;
  margin-bottom: 32px;
`

const WifiFlatList = styled(FlatList)`
  width: 100%;
`

const ListItem = styled(TouchableOpacity)`
  width: 100%;
  padding: 22px 24px;
  border-top-width: 1px;
  border-top-color: ${BeigeThirdColor};
`

const ItemText = styled(Text)`
  font-size: 16px;
  color: ${navyColor};
`

const HelpText = styled(Text)`
  position: absolute;
  bottom: 47px;
  font-size: 16px;
  color: ${primaryColor};
`

const renderListItem = ({item}) =>
	<ListItem key={item}>
		<ItemText>{item}</ItemText>
	</ListItem>

const ConnectList = () =>
	<PageWrapper>
		<HeaderBackCloseDark title={'코코지 하우스 세팅'}/>
		<StepperSecond marginTop={16} marginBottom={16}/>

		<TitleImage width={248} source={ImagePaths.kokoziHouse.wifi.checklist.text}/>
		<WifiFlatList data={WifiListData} renderItem={renderListItem}/>
		<HelpText>도움이 필요해요</HelpText>

		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>

export default ConnectList