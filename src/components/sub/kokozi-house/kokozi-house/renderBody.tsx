import React from 'react'
import styled from '@emotion/native'
import {Text} from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../../common/ImagePaths'
import {BeigeFifthColor} from '../../../../common/Colors'
import {renderWifi} from './renderWifi'
import {renderSound} from './renderSound'
import {renderTitle} from './renderTitle'

const BodyContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  width: 100%;
`

const BodyBackgroundImage = styled.Image`
  position: absolute;
  top: 30%;
`

const ThumbnailImage = styled(AutoHeightImage)`
  margin-top: 14%;
`

const BatteryText = styled(Text)`
  font-size: 14px;
  margin-top: 8px;
  color: ${BeigeFifthColor};
`

export const renderBody =
	<BodyContainer>
		<BodyBackgroundImage
			resizeMode="contain"
			source={ImagePaths.kokoziHouse.roundedBackground}
		/>
		<ThumbnailImage
			width={192}
			source={ImagePaths.kokoziHouse.thumbnail}
		/>
		{renderTitle}
		<BatteryText>배터리 88%</BatteryText>
		{renderWifi}
		{renderSound}
	</BodyContainer>