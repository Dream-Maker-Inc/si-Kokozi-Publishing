import React from 'react'
import {ProgressBar} from 'react-native-paper'
import {TouchableOpacity} from 'react-native'
import styled from '@emotion/native'
import {BeigeForthColor, primaryColor} from '../../../common/Colors'
import ImagePaths from '../../../common/ImagePaths'

const PlayContainer = styled.View`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: row;

  height: 60px;
  padding: 0 10px;
  background-color: white;
`

const ThumbnailImage = styled.Image`
  width: 46px;
`

const ThumbnailText = styled.Text`
  margin-left: 8px;
  color: ${BeigeForthColor};
`

const ControllerWrapper = styled.View`
  position: absolute;

  display: flex;
  align-items: center;
  flex-direction: row;

  right: 10px;
`

const ControllerImage = styled.Image`
  width: 36px;
  margin-right: 10px;
`

const BottomPlayer = () => <>

	<ProgressBar
		progress={0.5}
		color={primaryColor}
		style={{backgroundColor: '#CEC0AF'}}
	/>

	<PlayContainer>
		<ThumbnailImage
			resizeMode="contain"
			source={ImagePaths.arti.blankThumbnail}
		/>
		<ThumbnailText>하우스 안에 아띠를 넣어주세요</ThumbnailText>
		<ControllerWrapper>
			<TouchableOpacity>
				<ControllerImage
					resizeMode="contain"
					source={ImagePaths.components.icons.previous}
				/>
			</TouchableOpacity>
			<TouchableOpacity>
				<ControllerImage
					resizeMode="contain"
					source={ImagePaths.components.icons.next}
				/>
			</TouchableOpacity>
			<TouchableOpacity>
				<ControllerImage
					resizeMode="contain"
					source={ImagePaths.components.icons.playlist}
				/>
			</TouchableOpacity>
		</ControllerWrapper>
	</PlayContainer>
</>

export default BottomPlayer