import React from 'react'
import styled from '@emotion/native'
import {BeigeSecondColor, navyColor} from '../../../../../common/Colors'
import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../../../common/ImagePaths'

const CreatorWrapper = styled.View`
  width: 100%;
  padding: 24px 16px;
  background-color: ${BeigeSecondColor};
`

const SectionTitleText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${navyColor};
  margin-top: 24px;
`

const CreatorContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 30px 0;
`

const CreatorName = styled.Text`
  font-size: 14px;
  margin-left: 8px;
  color: ${navyColor};
`

const renderCreator =
	<CreatorWrapper>
		<SectionTitleText>만든 사람</SectionTitleText>
		<CreatorContainer>
			<AutoHeightImage source={ImagePaths.kokoziHouse.thumbnail} width={40}/>
			<CreatorName>코코지</CreatorName>
		</CreatorContainer>
	</CreatorWrapper>

export default renderCreator