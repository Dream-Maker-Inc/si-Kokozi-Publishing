import React from 'react'
import {Title} from 'react-native-paper'
import {primaryColor} from '../../common/Colors'
import styled from '@emotion/native'

type HeaderCancelModel = {
	title: string
}

const HeaderClose = (props: HeaderCancelModel) => <>
	<Header>
		<HeaderTitle>
			<Title style={{color: primaryColor, fontWeight: 'bold'}}>{props.title}</Title>
		</HeaderTitle>
		<CloseButtonContainer>
			<CloseButton
				resizeMode="contain"
				source={require('../../../assets/atti/register/close.png')}
			/>
		</CloseButtonContainer>
	</Header>
</>

const Header = styled.View`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;
  height: 60px;
`

const HeaderTitle = styled.View`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
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

export default HeaderClose