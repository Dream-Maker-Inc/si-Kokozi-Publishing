import React from 'react'
import {Image} from 'react-native'
import {Title} from 'react-native-paper'
import {primaryColor} from '../../common/Colors'
import styled from '@emotion/native'

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

const BackButtonContainer = styled.TouchableOpacity`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

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

type HeaderBackEditModel = {
	title: string
}

const HeaderBackEdit = (props: HeaderBackEditModel) => <>
	<Header>
		<BackButtonContainer>
			<Image
				resizeMode="contain"
				style={{height: '40%'}}
				source={require('../../../assets/atti/register/back.png')}
			/>
		</BackButtonContainer>
		<HeaderTitle>
			<Title style={{color: primaryColor, fontWeight: 'bold'}}>{props.title}</Title>
		</HeaderTitle>
		<EditButtonContainer>
			<Title>편집</Title>
		</EditButtonContainer>
	</Header>
</>

export default HeaderBackEdit