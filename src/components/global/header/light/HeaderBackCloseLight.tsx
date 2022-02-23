import React from 'react'
import {Title} from 'react-native-paper'
import styled from '@emotion/native'
import ImagePaths from '../../../../common/ImagePaths'
import {BeigeSecondColor, primaryColor} from '../../../../common/Colors'

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

const BackButtonContainer = styled.TouchableOpacity`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  left: 20px;
  height: 100%;
`

const BackButton = styled.Image`
  width: 40%;
`

const CloseButtonContainer = styled.TouchableOpacity`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 44px;
  right: 20px;
  height: 100%;
`

const CloseButton = styled.Image`
  width: 40%;
`

type HeaderBackEditModel = {
	title: string
}

const HeaderBackCloseLight = (props: HeaderBackEditModel) => <>
	<Header>

		<BackButtonContainer>
			<BackButton resizeMode="contain" source={ImagePaths.components.icons.back}/>
		</BackButtonContainer>

		<HeaderTitle>
			<HeaderTitleText style={{color: primaryColor, fontWeight: 'bold'}}>{props.title}</HeaderTitleText>
		</HeaderTitle>

		<CloseButtonContainer>
			<CloseButton resizeMode="contain" source={ImagePaths.components.icons.close}/>
		</CloseButtonContainer>

	</Header>
</>

export default HeaderBackCloseLight