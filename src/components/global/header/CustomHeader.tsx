import React, {ReactNode} from 'react'
import styled from '@emotion/native'
import {StatusBar, StyleSheet} from 'react-native'
import {Title} from 'react-native-paper'
import ImagePaths from '../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeFirstColor, BeigeSecondColor, navyColor, primaryColor} from '../../../common/Colors'

const HeaderWrapper = styled.View`
  position: relative;
  width: 100%;
  height: 44px;
`

const TitleTextContainer = styled.View`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const LeftContainer = styled.View`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 20px;
  height: 100%;
`

const RightContainer = styled.View`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 20px;
  height: 100%;
`

const HorizontalView = styled.View`
  display: flex;
  flex-direction: row;
`

const TitleText = styled(Title)`
  color: ${primaryColor};
  font-size: 16px;
  font-weight: bold;
`

const RightText = styled.Text`
  font-size: 15px;
  color: ${navyColor};
  font-weight: bold;
`

let styles

type HeaderBackEditModel = {
	logo?: boolean,
	title?: string,

	left?:
		| 'back'
		| 'notification',

	right?:
		| 'close'
		| 'more'
		| 'record'
		| 'recordAndMore'
		| 'edit'
		| 'confirm'
		| 'plus'
		| 'change'
		| 'complete',

	rightTwoIcons?: boolean,
	statusBarColor:
		| 'light'
		| 'dark'
}

const setLeftIcon = left => {
	let imageSource = ImagePaths.components.icons

	switch (left) {
	case 'back':
		imageSource = imageSource.back
		break
	case 'notification':
		imageSource = imageSource.notification
		break
	}

	return <AutoHeightImage source={imageSource} width={24}/>
}

export const setRightIcon = right => {
	let imageSource = ImagePaths.components.icons

	switch (right) {
	case 'close':
		imageSource = imageSource.close
		break
	case 'more':
		imageSource = imageSource.more
		break
	case 'record':
		imageSource = imageSource.record
		break
	case 'recordAndMore':
		imageSource = imageSource.back
		break
	case 'edit':
		return <RightText>편집</RightText>
	case 'confirm':
		imageSource = imageSource.back
		break
	case 'plus':
		imageSource = imageSource.back
		break
	case 'change':
		return <RightText>변경</RightText>
	case 'complete':
		return <RightText>완료</RightText>
	}

	return <AutoHeightImage source={imageSource} width={24}/>
}

const CustomHeader = (props: HeaderBackEditModel) => {

	let logo: ReactNode
	const leftIcon = setLeftIcon(props.left)
	let rightIcon = setRightIcon(props.right)
	let statusBar: ReactNode

	if (props.logo) {
		logo = <AutoHeightImage source={ImagePaths.logo.text} width={104}/>
	} else {
		logo = <TitleText>{props.title}</TitleText>
	}

	if (props.rightTwoIcons) {
		rightIcon =
			<HorizontalView>
				<AutoHeightImage source={ImagePaths.components.icons.record} width={24}/>
				<AutoHeightImage source={ImagePaths.components.icons.more} width={24}/>
			</HorizontalView>
	}

	if (props.statusBarColor === 'light') {
		statusBar = <StatusBar barStyle="dark-content" backgroundColor={BeigeFirstColor}/>
		styles = StyleSheet.create({
			header: {
				backgroundColor: BeigeFirstColor
			}
		})
	} else {
		statusBar = <StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
		styles = StyleSheet.create({
			header: {
				backgroundColor: BeigeSecondColor
			}
		})
	}

	return <>
		<HeaderWrapper style={styles.header}>
			<LeftContainer>{leftIcon}</LeftContainer>
			<TitleTextContainer>{logo}</TitleTextContainer>
			<RightContainer>{rightIcon}</RightContainer>
		</HeaderWrapper>
		{statusBar}
	</>
}

export default CustomHeader