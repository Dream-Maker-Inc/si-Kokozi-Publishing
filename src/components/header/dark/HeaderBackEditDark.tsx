import React from 'react'
import {Title} from 'react-native-paper'
import {primaryColor, secondaryColor} from '../../../common/Colors'
import styled from '@emotion/native'

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

const EditButtonContainer = styled.TouchableOpacity`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  right: 20px;
  height: 100%;
`

type HeaderBackEditModel = {
	title: string
}

const HeaderBackEditDark = (props: HeaderBackEditModel) => <>
	<Header>
		<BackButtonContainer>
			<BackButton
				resizeMode="contain"
				source={require('../../../../assets/components/icons/back.png')}
			/>
		</BackButtonContainer>
		<HeaderTitle>
			<HeaderTitleText style={{color: primaryColor, fontWeight: 'bold'}}>{props.title}</HeaderTitleText>
		</HeaderTitle>
		<EditButtonContainer>
			<Title>편집</Title>
		</EditButtonContainer>
	</Header>
</>

export default HeaderBackEditDark