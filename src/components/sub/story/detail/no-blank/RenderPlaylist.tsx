import React from 'react'
import styled from '@emotion/native'
import {ScrollView} from 'react-native'
import {PlaylistData} from '../../../../../data/Data'
import BigVerticalListItem from '../../../../list-items/components/BigVerticalListItem'
import {BeigeFifthColor, BeigeSecondColor, navyColor} from '../../../../../common/Colors'

const PlaylistWrapper = styled.View`
  width: 100%;
  margin-top: 32px;
  padding: 24px 16px;
  background-color: ${BeigeSecondColor};
`

const TitleContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`

const TitleText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${navyColor};
`

const CountText = styled.Text`
  font-size: 16px;
  color: ${BeigeFifthColor};
`

const PlaylistScrollView = styled(ScrollView)`
  margin-top: 24px;
`

const renderPlaylist =
	<PlaylistWrapper>
		<TitleContainer>
			<TitleText>담은 플레이리스트</TitleText>
			<CountText>4개</CountText>
		</TitleContainer>
		<PlaylistScrollView horizontal>
			{PlaylistData.map(item =>
				<BigVerticalListItem image={item.thumbnail} title={item.name}/>
			)}
		</PlaylistScrollView>
	</PlaylistWrapper>

export default renderPlaylist