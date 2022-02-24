import MultiSlider from '@ptomasroos/react-native-multi-slider'
import {BeigeForthColor, BeigeThirdColor, primaryColor} from '../../../../common/Colors'
import React from 'react'
import styled from '@emotion/native'
import {StyleSheet, Text} from 'react-native'

export const ComponentContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 90%;
  margin: 40px auto 8px;
  padding: 24px 8px;
  height: 64px;
  border-radius: 12px;
  background-color: ${BeigeThirdColor};
`

const TimeContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 84%;
  margin-bottom: 32px;
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

export const renderPlayBar =
	<>
		<ComponentContainer>
			<MultiSlider
				containerStyle={styles.containerStyle}
				selectedStyle={styles.selectorStyle}
				markerStyle={styles.markerStyle}
				trackStyle={styles.trackStyle}
			/>
		</ComponentContainer>
		<TimeContainer>
			<Text>00:56</Text>
			<Text>5:00</Text>
		</TimeContainer>
	</>