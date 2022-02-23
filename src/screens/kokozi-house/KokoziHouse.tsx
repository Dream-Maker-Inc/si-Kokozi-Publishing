import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import styled from '@emotion/native'
import {BeigeSecondColor} from '../../common/Colors'
import BottomPlayer from '../../components/global/player/BottomPlayer'
import IconHeaderNotiMoreDark from '../../components/global/header/dark/IconHeaderNotiMoreDark'
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
		<IconHeaderNotiMoreDark/>
		{renderHeader}
		{renderBody}
		<Player/>
		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>

export default KokoziHouse