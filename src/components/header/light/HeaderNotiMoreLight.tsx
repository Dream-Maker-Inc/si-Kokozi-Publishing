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

type HeaderBackEditModel = {
	title: string
}

const HeaderBackEditLight = (props: HeaderBackEditModel) => <>
	<Header>
		<NotificationIconContainer>
			<NotificationIcon
				resizeMode="cover"
				source={require('../../../../assets/tab/notification.png')}
			/>
		</NotificationIconContainer>
		<HeaderTitle>
			<HeaderTitleText style={{color: primaryColor, fontWeight: 'bold'}}>{props.title}</HeaderTitleText>
		</HeaderTitle>
		<MoreButtonContainer>
			<MoreIcon
				resizeMode="contain"
				source={require('../../../../assets/tab/more.png')}
			/>
		</MoreButtonContainer>
	</Header>
</>

export default HeaderBackEditLight