import React from 'react'
import styled from '@emotion/native'
import {WifiData} from '../../../../data/Data'
import ImagePaths from '../../../../common/ImagePaths'
import {FlatList, SafeAreaView, Text} from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeSecondColor, primaryColor} from '../../../../common/Colors'
import {StepperSecond} from '../../../../components/global/stepper/Stepper'
import CustomHeader from '../../../../components/global/header/CustomHeader'
import ListItem from '../../../../components/list-items/components/ListItem'

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

const HelpText = styled(Text)`
  position: absolute;
  bottom: 47px;
  font-size: 16px;
  color: ${primaryColor};
`

const ConnectList = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" right="close" title="코코지 하우스 세팅"/>
		<StepperSecond marginTop={16} marginBottom={16}/>

		<TitleImage width={248} source={ImagePaths.kokoziHouse.wifi.checklist.text}/>
		<WifiFlatList
			data={WifiData}
			renderItem={
				({item}) => <ListItem title={item.name}/>
			}
		/>
		<HelpText>도움이 필요해요</HelpText>
	</PageWrapper>

export default ConnectList