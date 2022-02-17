import React from 'react'
import HeaderBackEdit from '../../../../components/header/HeaderBackEdit'
import styled from '@emotion/native'
import {
	backgroundColor,
	backgroundSecondaryColor,
	primaryColor,
	secondaryColor,
	textCaptionColor,
	textDarkColor
} from '../../../../common/Colors'
import {Image, StatusBar, StyleSheet} from 'react-native'
import {Button, Headline, Subheading, Title} from 'react-native-paper'

const ProfileWrapper = styled.View`
  position: relative;
  background-color: ${backgroundSecondaryColor};
`

const AttiImage = styled.Image`
  margin: 0 auto;
  width: 40%;
`

const LicenseContainer = styled.View`
  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  bottom: 20px;
  right: 20px;

  width: 70px;
  height: 70px;

  border-radius: 10px;
  background-color: white;
`

const StoryWrapper = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${backgroundColor};
`

const Header = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

const ButtonWrapper = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`

const ModeButton = styled(Button)`
  background-color: ${secondaryColor};
  height: 40px;
`

const Detail = () => <>
	<ProfileWrapper>
		<HeaderBackEdit title={'아띠 프로필'}/>
		<AttiImage
			resizeMode="contain"
			source={require('../../../../../assets/atti/detail/thumbnail.png')}/>
		<Title
			style={{
				fontSize: 30,
				textAlign: 'center',
				marginBottom: 30,
				fontWeight: 'bold'
			}}
		>호기</Title>
		<LicenseContainer
			style={styles.container}>
			<Image
				resizeMode="contain"
				style={{width: 50, height: 50}}
				source={require('../../../../../assets/atti/detail/thumbnail.png')}/>
		</LicenseContainer>
	</ProfileWrapper>

	<StoryWrapper>
		<Header>
			<Headline style={{fontWeight: 'bold', color: textDarkColor}}>이야기</Headline>
			<Subheading style={{color: primaryColor, fontWeight: 'bold'}}>총 46분 37초</Subheading>
		</Header>
		<ButtonWrapper>
			<ModeButton mode="contained">
				<Image resizeMode="contain" style={{height: 10, width: 10}}
					   source={require('../../../../../assets/atti/detail/repeat.png')}/>
				<Subheading style={{color: textCaptionColor}}>반복재생</Subheading>
			</ModeButton>
		</ButtonWrapper>
	</StoryWrapper>
	<StatusBar barStyle="dark-content" backgroundColor={backgroundSecondaryColor}/>
</>

const styles = StyleSheet.create({
	container: {
		shadowColor: '#999',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	}
})

export default Detail