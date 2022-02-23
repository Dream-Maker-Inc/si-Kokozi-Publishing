import React from 'react'
import {Title} from 'react-native-paper'
import styled from '@emotion/native'
import {BeigeSecondColor, primaryColor} from '../../../../common/Colors'
import ImagePaths from '../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'

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

const NotificationIconContainer = styled.TouchableOpacity`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  left: 0;
  height: 100%;
`

const MoreButtonContainer = styled.TouchableOpacity`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 5px;
  right: 24px;
  height: 100%;
`

type HeaderBackEditModel = {
	title: string
}

const HeaderBackEditLight = (props: HeaderBackEditModel) => <>
	<Header>
		<NotificationIconContainer>
			<AutoHeightImage width={24} source={ImagePaths.components.icons.notification}/>
		</NotificationIconContainer>
		<HeaderTitle>
			<HeaderTitleText>{props.title}</HeaderTitleText>
		</HeaderTitle>
		<MoreButtonContainer>
			<AutoHeightImage width={5} source={ImagePaths.components.icons.more}/>
		</MoreButtonContainer>
	</Header>
</>

export default HeaderBackEditLight