import React from 'react'
import {FlatList, SafeAreaView, StatusBar, TouchableOpacity} from 'react-native'
import styled from '@emotion/native'
import {BeigeSecondColor, BeigeThirdColor, primaryColor, textDarkColor} from '../../../../common/Colors'
import HeaderBackCloseDark from '../../../../components/header/dark/HeaderBackCloseDark'
import AutoHeightImage from 'react-native-auto-height-image'
import {Caption, Paragraph} from 'react-native-paper'

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

const ProgressImage = styled(AutoHeightImage)`
  margin: 16px 0;
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

const ItemText = styled(Paragraph)`
  font-size: 16px;
  color: ${textDarkColor};
`

const HelpText = styled(Caption)`
  position: absolute;
  bottom: 47px;
  font-size: 16px;
  color: ${primaryColor};
`

const renderListItem = ({item}) =>
	<ListItem>
		<ItemText>{item}</ItemText>
	</ListItem>

const ConnectList = () =>
	<PageWrapper>
		<HeaderBackCloseDark title={'코코지 하우스 세팅'}/>
		<ProgressImage
			width={84}
			source={require('../../../../../assets/components/stepper/step-2.png')}
		/>
		<TitleImage
			width={248}
			source={require('../../../../../assets/kokozi-house/wifi/checklist/text.png')}
		/>
		<WifiFlatList
			data={WifiListData}
			renderItem={renderListItem}
		/>
		<HelpText>도움이 필요해요</HelpText>
		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>

export default ConnectList