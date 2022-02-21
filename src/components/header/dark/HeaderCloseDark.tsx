import React from 'react'
import {primaryColor, secondaryColor} from '../../../common/Colors'
import styled from '@emotion/native'
import {Title} from 'react-native-paper'

const Header = styled.View`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;
  height: 60px;

  background-color: ${secondaryColor};
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

const HeaderCloseDark = (props: HeaderCancelModel) => <>
	<Header>
		<HeaderTitle>
			<HeaderTitleText>{props.title}</HeaderTitleText>
		</HeaderTitle>
		<CloseButtonContainer>
			<CloseButton
				resizeMode="contain"
				source={require('../../../../assets/components/icons/close.png')}
			/>
		</CloseButtonContainer>
	</Header>
</>

export default HeaderCloseDark