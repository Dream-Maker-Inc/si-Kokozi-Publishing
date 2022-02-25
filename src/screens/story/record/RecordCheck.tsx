import React from 'react'
import styled from '@emotion/native'
import {SafeAreaView} from 'react-native'
import ImagePaths from '../../../common/ImagePaths'
import {BeigeSecondColor, primaryColor} from '../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import CustomHeader from '../../../components/global/header/CustomHeader'
import {renderPlayBar} from '../../../components/sub/story/detail/renderPlayBar'

const PageWrapper = styled(SafeAreaView)`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const PlayBarWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
`

const ButtonContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 110px;
`

const SaveButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 48px;
  margin: 0 auto;
  border-radius: 8px;
  background-color: ${primaryColor};
`

const SaveButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: white;
`

const RerecordText = styled.Text`
  margin: 20px 0;
  font-size: 16px;
  color: ${primaryColor};
`

const RecordCheck = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="확인하기"/>

		<PlayBarWrapper>
			{renderPlayBar}
			<AutoHeightImage source={ImagePaths.story.story.noBlank.pause} width={78}/>
		</PlayBarWrapper>

		<ButtonContainer>
			<SaveButton>
				<SaveButtonText>저장하기</SaveButtonText>
			</SaveButton>
			<RerecordText>다시 녹음하기</RerecordText>
		</ButtonContainer>
	</PageWrapper>

export default RecordCheck