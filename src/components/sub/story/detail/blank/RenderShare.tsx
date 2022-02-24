import React from 'react'
import styled from '@emotion/native'
import ImagePaths from '../../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import OutlinedAddButton from '../../../../global/buttons/outlined/OutlinedAddButton'
import {BeigeSecondColor, BeigeThirdColor, navyColor} from '../../../../../common/Colors'

const ShareWrapper = styled.View`
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

const ScreenImage = styled(AutoHeightImage)`
  margin: 32px auto 24px;
`

const Divider = styled.View`
  width: 90%;
  height: 1px;
  margin: 0 auto;
  background-color: ${BeigeThirdColor};
`

const renderShare =
	<ShareWrapper>
		<Divider/>
		<SectionTitleText>이야기 공유</SectionTitleText>
		<ScreenImage width={253} source={ImagePaths.story.story.blank.detail.share}/>
		<OutlinedAddButton icon="share" title={'공유하기'}/>
	</ShareWrapper>

export default renderShare