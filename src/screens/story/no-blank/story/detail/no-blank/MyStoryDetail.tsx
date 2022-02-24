import React from 'react'
import styled from '@emotion/native'
import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../../../../common/ImagePaths'
import {SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import CustomHeader from '../../../../../../components/global/header/CustomHeader'
import {renderPlayBar} from '../../../../../../components/sub/story/detail/renderPlayBar'
import {BeigeFifthColor, BeigeFirstColor, navyColor} from '../../../../../../common/Colors'
import renderShare from '../../../../../../components/sub/story/detail/no-blank/RenderShare'
import renderCreator from '../../../../../../components/sub/story/detail/blank/RenderCreator'
import renderPlaylist from '../../../../../../components/sub/story/detail/no-blank/RenderPlaylist'

const PageWrapper = styled(SafeAreaView)`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeFirstColor};
`

const StyledScrollView = styled(ScrollView)`
  display: flex;
  width: 100%;
`

const TitleContainer = styled.View`
  display: flex;
  align-items: center;
  margin-top: 24px;
`

const TitleText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${navyColor};
  margin-right: 4px;
`

const CaptionText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-top: 8px;
  color: ${BeigeFifthColor};
`

const renderTitleContainer =
	<TitleContainer>
		<TitleText>첫 번째 이야기
			<AutoHeightImage source={ImagePaths.components.icons.edit} width={24}/>
		</TitleText>
		<CaptionText>2022.01.10 녹음</CaptionText>
	</TitleContainer>

const MyStoryDetail = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="light" left="back" title="이야기" right="more"/>
		<StyledScrollView contentContainerStyle={{alignItems: 'center'}}>
			{renderTitleContainer}
			{renderPlayBar}

			<TouchableOpacity>
				<AutoHeightImage source={ImagePaths.story.story.noBlank.pause} width={78}/>
			</TouchableOpacity>

			{renderPlaylist}
			{renderShare}
			{renderCreator}
		</StyledScrollView>
	</PageWrapper>

export default MyStoryDetail