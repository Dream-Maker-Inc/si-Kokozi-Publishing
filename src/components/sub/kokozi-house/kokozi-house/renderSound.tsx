import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../../common/ImagePaths'
import {BeigeForthColor, BeigeThirdColor, primaryColor} from '../../../../common/Colors'
import React from 'react'
import styled from '@emotion/native'
import {StyleSheet} from 'react-native'
import {Slider} from '@miblanchard/react-native-slider'

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
		width: '86%',
		marginLeft: 16
	},
	thumbStyle: {
		width: 24,
		height: 24,
		backgroundColor: 'white',
		borderRadius: 20,
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
		<Slider
			animateTransitions
			containerStyle={styles.containerStyle}
			minimumTrackTintColor={primaryColor}
			thumbStyle={styles.thumbStyle}
			thumbTouchSize={{
				width: 24,
				height: 24,
			}}
			trackStyle={styles.trackStyle}
		/>
	</ComponentContainer>