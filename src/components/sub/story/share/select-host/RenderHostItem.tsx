import React from 'react'
import styled from '@emotion/native'
import {Checkbox} from 'react-native-paper'
import {Text, TouchableOpacity} from 'react-native'
import ImagePaths from '../../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeThirdColor, navyColor, primaryColor} from '../../../../../common/Colors'

const HostItemWrapper = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-grow: 1;
  height: 88px;
  border-bottom-width: 1px;
  border-bottom-color: ${BeigeThirdColor};
  margin: 0 16px;
`

const ItemContents = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-grow: 1;
  height: 100%;
  margin: 16px;
`

const ItemImage = styled(AutoHeightImage)`
  border-radius: 4px;
`

const TextContainer = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const TitleText = styled(Text)`
  color: ${navyColor};
  font-size: 15px;
`

const RenderHostItem = ({item}) =>
	<HostItemWrapper key={item.name}>
		<ItemImage width={56} source={ImagePaths.arti.playlist.thumbnail}/>

		<ItemContents>
			<TextContainer>
				<TitleText>{item.name}</TitleText>
			</TextContainer>
			<Checkbox color={primaryColor} status="checked"/>
		</ItemContents>

	</HostItemWrapper>

export default RenderHostItem