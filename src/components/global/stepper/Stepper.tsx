import React from 'react'
import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../common/ImagePaths'

type StepperModel = {
	marginTop?: number,
	marginBottom?: number,
}

export const StepperFirst = (props: StepperModel) =>
	<AutoHeightImage
		width={84}
		source={ImagePaths.components.stepper.step1}
		style={{
			marginTop: props.marginTop,
			marginBottom: props.marginBottom,
		}}
	/>

export const StepperSecond = (props: StepperModel) =>
	<AutoHeightImage
		width={84}
		source={ImagePaths.components.stepper.step2}
		style={{
			marginTop: props.marginTop,
			marginBottom: props.marginBottom,
		}}
	/>

export const StepperThird = (props: StepperModel) =>
	<AutoHeightImage
		width={84}
		source={ImagePaths.components.stepper.step3}
		style={{
			marginTop: props.marginTop,
			marginBottom: props.marginBottom,
		}}
	/>