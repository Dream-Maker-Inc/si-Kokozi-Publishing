import React from 'react'
import styled from '@emotion/native'
import {BeigeSecondColor} from '../../../../common/Colors'
import ImagePaths from '../../../../common/ImagePaths'

const Header = styled.View`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 60px;

  background-color: ${BeigeSecondColor};
`

const LogoImage = styled.Image`
  height: 20px;
`

const CloseButtonContainer = styled.TouchableOpacity`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  right: 20px;
  height: 100%;
`

const CloseButton = styled.Image`
  height: 40%;
`

const IconHeaderCloseDark = () => <>
	<Header>
		<LogoImage resizeMode="contain" source={ImagePaths.logo.text}/>
		<CloseButtonContainer>
			<CloseButton
				resizeMode="contain"
				source={ImagePaths.components.icons.close}
			/>
		</CloseButtonContainer>
	</Header>
</>

export default IconHeaderCloseDark