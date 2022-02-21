import React from 'react'
import {ScrollView, StatusBar, TouchableOpacity} from 'react-native'
import styled from '@emotion/native'
import {BeigeSecondColor, secondaryColor, textDarkColor} from '../../common/Colors'
import {Paragraph, Title} from 'react-native-paper'
import {settingListData} from './data'
import HeaderDark from '../../components/header/dark/HeaderDark'

const PageWrapper = styled(ScrollView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ProfileContainer = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  height: 100px;
  padding: 20px;
`

const ProfileInformation = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`

const ProfileImage = styled.Image`
  width: 60px;
  height: 60px;
`

const ProfileName = styled(Title)`
  margin-left: 20px;
  font-weight: bold;
  color: ${textDarkColor};
`

const Arrow = styled.Image`
  width: 24px;
  height: 24px;
`

const Divider = styled.View`
  width: 100%;
  height: 6px;
  background-color: ${secondaryColor};
`

const ListContainer = styled.View`
  width: 100%;
`

const ListTitle = styled(Title)`
  font-weight: bold;
  margin: 20px;
  color: ${textDarkColor};
`

const ListItemContainer = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 40px;
  margin: 20px 24px 0;

  border: none;
  border-bottom-width: 1px;
  border-color: ${secondaryColor};
`

const ListItem = styled(Paragraph)`
  flex-grow: 1;
  justify-content: center;
  color: ${textDarkColor};
  padding-bottom: 20px;
  height: 100%;
  font-weight: bold;
`

const MyPage = () => <PageWrapper>

	<HeaderDark title={'마이페이지'}/>

	<ProfileContainer>
		<ProfileInformation>
			<ProfileImage resizeMode="contain" source={require('../../../assets/components/icons/profile-image.png')}/>
			<ProfileName>코코지</ProfileName>
		</ProfileInformation>
		<Arrow resizeMode="cover" source={require('../../../assets/components/icons/arrow-right.png')}/>
	</ProfileContainer>

	<Divider/>

	<ListContainer>
		{settingListData.map(setting =>
			<>
				<ListTitle>{setting.title}</ListTitle>
				{setting.item.map(list => (
					<ListItemContainer>
						<ListItem>{list}</ListItem>
						<Arrow resizeMode="contain" source={require('../../../assets/components/icons/arrow-right.png')}/>
					</ListItemContainer>
				))}
				<Divider/>
			</>
		)}
	</ListContainer>

	<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
</PageWrapper>

export default MyPage