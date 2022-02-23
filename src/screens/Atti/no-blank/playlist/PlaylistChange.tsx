import React from 'react'
import styled from '@emotion/native'
import {Title} from 'react-native-paper'
import {ScrollView, StatusBar, TouchableOpacity} from 'react-native'
import {BeigeFirstColor, BeigeSecondColor, BeigeThirdColor, primaryColor} from '../../../../common/Colors'
import HeaderBackLight from '../../../../components/global/header/light/HeaderBackLight'
import renderProfile from '../../../../components/sub/arti/no-blank/playlist/playlist-change/RenderProfile'
import renderStoryList from '../../../../components/sub/arti/no-blank/playlist/playlist-change/renderStoryList'
import renderStory from '../../../../components/sub/arti/no-blank/playlist/playlist-change/renderStory'

export const ChangeButtonContainer = styled.View`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background-color: ${BeigeSecondColor};
  border-top-color: ${BeigeThirdColor};
  border-top-width: 1px;
`

export const ChangeButton = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 60px;
  border-radius: 8px;
  background-color: ${primaryColor};
`

export const ButtonText = styled(Title)`
  color: white;
  font-weight: bold;
`

const PlaylistChange = () =>
	<>
		<HeaderBackLight title="플레이리스트"/>

		<ScrollView>
			{renderProfile}
			{renderStory}
			{renderStoryList}
		</ScrollView>

		<ChangeButtonContainer>
			<ChangeButton>
				<ButtonText>교체하기</ButtonText>
			</ChangeButton>
		</ChangeButtonContainer>

		<StatusBar barStyle="dark-content" backgroundColor={BeigeFirstColor}/>
	</>

export default PlaylistChange