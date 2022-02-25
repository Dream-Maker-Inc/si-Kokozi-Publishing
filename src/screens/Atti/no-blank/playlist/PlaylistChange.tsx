import React from 'react'
import styled from '@emotion/native'
import {Title} from 'react-native-paper'
import {ScrollView, TouchableOpacity} from 'react-native'
import CustomHeader from '../../../../components/global/header/CustomHeader'
import {BeigeSecondColor, BeigeThirdColor, primaryColor} from '../../../../common/Colors'
import renderStory from '../../../../components/sub/arti/no-blank/playlist/playlist-change/renderStory'
import renderProfile from '../../../../components/sub/arti/no-blank/playlist/playlist-change/RenderProfile'
import renderStoryList from '../../../../components/sub/arti/no-blank/playlist/playlist-change/renderStoryList'

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
		<CustomHeader statusBarColor="light" left="back" title="아띠 프로필" right="edit"/>

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
	</>

export default PlaylistChange