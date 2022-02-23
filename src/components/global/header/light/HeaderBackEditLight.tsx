import React from 'react'
import styled from '@emotion/native'
import {BeigeFirstColor, navyColor, primaryColor} from '../../../../common/Colors'
import ImagePaths from '../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {Text} from 'react-native'

const Header = styled.View`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;
  height: 60px;
  background-color: ${BeigeFirstColor};
`

const HeaderTitle = styled.View`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
`

const HeaderTitleText = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: ${primaryColor};
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

const EditButtonContainer = styled.TouchableOpacity`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  right: 20px;
  height: 100%;
`

const EditText = styled(Text)`
  font-size: 15px;
  font-weight: bold;
  color: ${navyColor};
`

type HeaderBackEditModel = {
	title: string
}

const HeaderBackEditLight = (props: HeaderBackEditModel) => <>
	<Header>
		<BackButtonContainer>
			<AutoHeightImage width={10} source={ImagePaths.components.icons.back}/>
		</BackButtonContainer>
		<HeaderTitle>
			<HeaderTitleText>{props.title}</HeaderTitleText>
		</HeaderTitle>
		<EditButtonContainer>
			<EditText>편집</EditText>
		</EditButtonContainer>
	</Header>
</>

export default HeaderBackEditLight