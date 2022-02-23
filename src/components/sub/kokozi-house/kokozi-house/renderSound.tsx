import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../../common/ImagePaths'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import {BeigeForthColor, BeigeThirdColor, primaryColor} from '../../../../common/Colors'
import React from 'react'
import styled from '@emotion/native'
import {StyleSheet} from 'react-native'

export const ComponentContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 90%;
  margin: 24px auto 0;
  padding: 20px 24px;
  height: 64px;
  border-radius: 12px;
  background-color: ${BeigeThirdColor};
`

const styles = StyleSheet.create({
	containerStyle: {
		marginLeft: 16
	},
	selectorStyle: {
		backgroundColor: primaryColor
	},
	markerStyle: {
		width: 24,
		height: 24,
		marginTop: 6,
		backgroundColor: 'white',
		shadowColor: '#999',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	trackStyle: {
		height: 8,
		backgroundColor: BeigeForthColor,
		borderRadius: 10
	}
})

export const renderSound =
	<ComponentContainer>
		<AutoHeightImage
			width={24}
			source={ImagePaths.components.icons.audio}
		/>
		<MultiSlider
			containerStyle={styles.containerStyle}
			selectedStyle={styles.selectorStyle}
			markerStyle={styles.markerStyle}
			trackStyle={styles.trackStyle}
		/>
	</ComponentContainer>