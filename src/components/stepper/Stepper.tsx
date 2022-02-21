import React from 'react'
import AutoHeightImage from 'react-native-auto-height-image'

type StepperModel = {
	marginTop?: number,
	marginBottom?: number,
}

export const StepperFirst = (props: StepperModel) =>
	<AutoHeightImage
		width={84}
		source={require('../../../assets/components/stepper/step-1.png')}
		style={{
			marginTop: props.marginTop,
			marginBottom: props.marginBottom,
		}}
	/>

export const StepperSecond = (props: StepperModel) =>
	<AutoHeightImage
		width={84}
		source={require('../../../assets/components/stepper/step-2.png')}
		style={{
			marginTop: props.marginTop,
			marginBottom: props.marginBottom,
		}}
	/>

export const StepperThird = (props: StepperModel) =>
	<AutoHeightImage
		width={84}
		source={require('../../../assets/components/stepper/step-3.png')}
		style={{
			marginTop: props.marginTop,
			marginBottom: props.marginBottom,
		}}
	/>