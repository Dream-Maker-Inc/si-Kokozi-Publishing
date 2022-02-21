import React from 'react'
import {Title} from 'react-native-paper'
import {backgroundSecondaryColor, primaryColor} from '../../../common/Colors'
import styled from '@emotion/native'

const Header = styled.View`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;
  height: 60px;

  background-color: ${backgroundSecondaryColor};
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

  left: 20px;
  height: 100%;
`

const BackButton = styled.Image`
  height: 40%;
`

type HeaderBackModel = {
	title: string
}

const HeaderBackLight = (props: HeaderBackModel) => <>
	<Header>
		<BackButtonContainer>
			<BackButton
				resizeMode="contain"
				source={require('../../../../assets/components/icons/back.png')}
			/>
		</BackButtonContainer>
		<HeaderTitle>
			<HeaderTitleText>{props.title}</HeaderTitleText>
		</HeaderTitle>
	</Header>
</>

export default HeaderBackLight