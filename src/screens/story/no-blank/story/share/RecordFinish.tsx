import React from 'react'
import styled from '@emotion/native'
import {SafeAreaView, TouchableOpacity} from 'react-native'
import ImagePaths from '../../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeSecondColor, primaryColor} from '../../../../../common/Colors'
import CustomHeader from '../../../../../components/global/header/CustomHeader'

const PageWrapper = styled(SafeAreaView)`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ScreenText = styled(AutoHeightImage)`
  margin: 60px auto 56px;
`

const ButtonsContainer = styled.View`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
`

const PlaylistButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 48px;
  border-radius: 8px;
  background-color: ${primaryColor};
`

const PlaylistButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
`

const ShareButton = styled.Text`
  font-size: 16px;
  color: ${primaryColor};
  margin: 20px 0;
`

const RecordFinish = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="플레이리스트에 담기" right="close"/>
		<ScreenText source={ImagePaths.story.story.share.recordFinish.text} width={214}/>
		<AutoHeightImage source={ImagePaths.story.story.share.recordFinish.image} width={214}/>

		<ButtonsContainer>
			<PlaylistButton>
				<PlaylistButtonText>플레이리스트에 담기</PlaylistButtonText>
			</PlaylistButton>
			<TouchableOpacity>
				<ShareButton>이야기 공유하기</ShareButton>
			</TouchableOpacity>
		</ButtonsContainer>
	</PageWrapper>

export default RecordFinish