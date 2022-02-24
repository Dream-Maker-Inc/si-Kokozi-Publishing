import React from 'react'
import styled from '@emotion/native'
import {BeigeFifthColor, BeigeSecondColor, BeigeThirdColor, navyColor} from '../../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../../../common/ImagePaths'

const ShareWrapper = styled.View`
  width: 100%;
  padding: 24px 16px;
  background-color: ${BeigeSecondColor};
`

const TitleText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${navyColor};
  margin-top: 24px;
`

const Divider = styled.View`
  width: 100%;
  height: 1px;
  margin: 0 auto;
  background-color: ${BeigeThirdColor};
`

const ListWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 68px;
  border-bottom-width: 1px;
  border-bottom-color: ${BeigeThirdColor};
`

const NameContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`

const NameText = styled.Text`
  font-size: 14px;
  color: ${navyColor};
  margin-left: 8px;
`

const DateText = styled.Text`
  font-size: 13px;
  color: ${BeigeFifthColor};
`

const renderProfileList =
	<ListWrapper>
		<NameContainer>
			<AutoHeightImage source={ImagePaths.kokoziHouse.thumbnail} width={40}/>
			<NameText>할머니</NameText>
		</NameContainer>
		<DateText>2022.01.05</DateText>
	</ListWrapper>

const renderShare =
	<ShareWrapper>
		<Divider/>
		<TitleText>이야기 공유</TitleText>
		{renderProfileList}
		{renderProfileList}
	</ShareWrapper>

export default renderShare