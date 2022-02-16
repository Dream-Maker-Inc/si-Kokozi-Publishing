import React from 'react'
import {Image, SafeAreaView, ScrollView} from 'react-native'

import {backgroundColor} from '../../../../common/Colors'

const Atti = () => <>
	<SafeAreaView
		style={{
			width: '100%',
			flex: 1,
			backgroundColor: backgroundColor
		}}>
		<ScrollView>
			<Image
				style={{
					width: '70%',
					marginLeft: 'auto',
					marginRight: 'auto',
					zIndex: 1
				}}
				resizeMode="contain"
				source={require('../../../../../assets/atti/all/blank-text.png')}/>
			<Image
				style={{
					width: '100%',
					height: 500,
					marginTop: -180,
					marginLeft: 'auto',
					marginRight: 'auto'
				}}
				resizeMode="contain"
				source={require('../../../../../assets/atti/all/blank-image.png')}/>
		</ScrollView>
	</SafeAreaView>
</>

export default Atti