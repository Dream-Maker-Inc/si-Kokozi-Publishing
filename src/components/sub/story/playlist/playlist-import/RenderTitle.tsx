import React from 'react'
import styled from '@emotion/native'
import {StyleSheet} from 'react-native'
import ImagePaths from '../../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeFifthColor, navyColor} from '../../../../../common/Colors'

const TitleContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 16px;
  border-radius: 12px;
  background-color: white;
  padding: 12px;
`

const TextContainer = styled.View`
  display: flex;
  justify-content: center;
  margin-left: 16px;
`

const TitleText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${navyColor};
`

const CaptionText = styled.Text`
  font-size: 13px;
  color: ${BeigeFifthColor};
  margin-top: 8px;
`

const styles = StyleSheet.create({
	container: {
		shadowColor: '#999',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	}
})

const renderTitle =
	<TitleContainer style={styles.container}>
		<AutoHeightImage source={ImagePaths.arti.all.thumbnail} width={56}/>
		<TextContainer>
			<TitleText>플레이리스트</TitleText>
			<CaptionText>이야기 0개 · 총 재생시간 0분 0초</CaptionText>
		</TextContainer>
	</TitleContainer>

export default renderTitle