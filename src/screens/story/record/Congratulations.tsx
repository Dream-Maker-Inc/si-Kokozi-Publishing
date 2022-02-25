import React from 'react'
import styled from '@emotion/native'
import {SafeAreaView} from 'react-native'
import ImagePaths from '../../../common/ImagePaths'
import {BeigeSecondColor, primaryColor} from '../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import CustomHeader from '../../../components/global/header/CustomHeader'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ScreenContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

const ScreenImage = styled(AutoHeightImage)`
  margin-top: 56px;
`

const ButtonContainer = styled.View`
  display: flex;
  align-items: center;
`

const ConfirmButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 48px;
  background-color: ${primaryColor};
  border-radius: 8px;
`

const ConfirmButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`

const ShareButton = styled.Text`
  font-size: 16px;
  margin: 20px;
  color: ${primaryColor};
`

const Congratulations = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" title="이야기 저장" right="close"/>

		<ScreenContainer>
			<AutoHeightImage source={ImagePaths.story.record.finish.text} width={280}/>
			<ScreenImage source={ImagePaths.story.record.finish.image} width={240}/>
		</ScreenContainer>

		<ButtonContainer>
			<ConfirmButton>
				<ConfirmButtonText>플레이리스트에 담기</ConfirmButtonText>
			</ConfirmButton>
			<ShareButton>이야기 공유</ShareButton>
		</ButtonContainer>

	</PageWrapper>

export default Congratulations