import React from 'react'
import styled from '@emotion/native'
import {TextInput} from 'react-native'
import ImagePaths from '../../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeForthColor, navyColor} from '../../../../../common/Colors'

const InformationContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 295px;
`

const ImageContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  margin-top: 32px;
`

const ImagePreview = styled(AutoHeightImage)`
  position: relative;
  border-radius: 4px;
`

const CameraIcon = styled(AutoHeightImage)`
  position: absolute;
`

const TitleContainer = styled.View`
  margin: 0 auto;
  width: 50%;
`

const TitleInput = styled(TextInput)`
  height: 30px;
  margin-top: 24px;
  border-bottom-width: 1px;
  border-bottom-color: ${BeigeForthColor};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: ${navyColor};
`

const CounterText = styled.Text`
  color: ${BeigeForthColor};
  margin-top: 2px;
  font-size: 11px;
  text-align: right;
`

const CaptionContainer = styled.View`
  margin: 0 auto;
  width: 70%;
`

const CaptionInput = styled(TextInput)`
  height: 20px;
  margin-top: 26px;
  font-size: 13px;
  text-align: center;
  color: ${navyColor};
  border-bottom-width: 1px;
  border-bottom-color: ${BeigeForthColor};
`

const renderPlaylistInformation =
	<InformationContainer>
		<ImageContainer>
			<ImagePreview source={ImagePaths.arti.all.thumbnail} width={120}/>
			<CameraIcon source={ImagePaths.components.icons.camera} width={30}/>
		</ImageContainer>

		<TitleContainer>
			<TitleInput selectionColor={navyColor}/>
			<CounterText>10/20</CounterText>
		</TitleContainer>

		<CaptionContainer>
			<CaptionInput selectionColor={navyColor}/>
			<CounterText>27/160</CounterText>
		</CaptionContainer>
	</InformationContainer>

export default renderPlaylistInformation