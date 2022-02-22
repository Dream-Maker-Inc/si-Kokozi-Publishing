import React from 'react'
import {Title} from 'react-native-paper'
import {BeigeSecondColor, primaryColor} from '../../../common/Colors'
import styled from '@emotion/native'

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

type HeaderBackModel = {
	title: string
}

const HeaderDark = (props: HeaderBackModel) => <>
	<Header>
		<HeaderTitle>
			<HeaderTitleText>{props.title}</HeaderTitleText>
		</HeaderTitle>
	</Header>
</>

export default HeaderDark