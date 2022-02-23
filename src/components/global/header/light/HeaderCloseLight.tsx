import React from 'react'
import styled from '@emotion/native'
import {Title} from 'react-native-paper'
import {BeigeSecondColor, primaryColor} from '../../../../common/Colors'
import ImagePaths from '../../../../common/ImagePaths'

const Header = styled.View`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;
  height: 60px;

  background-color: ${BeigeSecondColor};
`

const HeaderTitle = styled.View`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`

const HeaderTitleText = styled(Title)`
  color: ${primaryColor};
  font-weight: bold;
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

type HeaderCancelModel = {
	title: string
}

const HeaderCloseLight = (props: HeaderCancelModel) => <>
	<Header>
		<HeaderTitle>
			<HeaderTitleText>{props.title}</HeaderTitleText>
		</HeaderTitle>
		<CloseButtonContainer>
			<CloseButton resizeMode="contain" source={ImagePaths.components.icons.close}/>
		</CloseButtonContainer>
	</Header>
</>

export default HeaderCloseLight