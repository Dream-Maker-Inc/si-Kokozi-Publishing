import React from 'react'
import {BeigeSecondColor} from '../../../common/Colors'
import styled from '@emotion/native'

const Header = styled.View`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 60px;
  background-color: ${BeigeSecondColor};
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

const NotificationIcon = styled.Image`
  width: 40%;
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

const MoreIcon = styled.Image`
  width: 100%;
`

const LogoImage = styled.Image`
  height: 20px;
`

const IconHeaderNotiMoreDark = () => <>
	<Header>
		<NotificationIconContainer>
			<NotificationIcon
				resizeMode="cover"
				source={require('../../../../assets/components/icons/notification.png')}
			/>
		</NotificationIconContainer>
		<LogoImage resizeMode="contain" source={require('../../../../assets/logo/text.png')}/>
		<MoreButtonContainer>
			<MoreIcon
				resizeMode="contain"
				source={require('../../../../assets/components/icons/more.png')}
			/>
		</MoreButtonContainer>
	</Header>
</>

export default IconHeaderNotiMoreDark