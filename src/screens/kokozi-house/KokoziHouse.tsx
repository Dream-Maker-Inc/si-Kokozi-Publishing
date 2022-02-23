import React from 'react'
import {SafeAreaView} from 'react-native'
import styled from '@emotion/native'
import {BeigeSecondColor} from '../../common/Colors'
import BottomPlayer from '../../components/global/player/BottomPlayer'
import CustomHeader from '../../components/global/header/CustomHeader'
import {renderBody} from '../../components/sub/kokozi-house/kokozi-house/renderBody'
import {renderHeader} from '../../components/sub/kokozi-house/kokozi-house/renderHeader'

const PageWrapper = styled(SafeAreaView)`
  position: relative;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const Player = styled(BottomPlayer)`
  position: absolute;
  bottom: 0;
`

const KokoziHouse = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" logo left="notification" right="more"/>
		{renderHeader}
		{renderBody}
		<Player/>
	</PageWrapper>

export default KokoziHouse