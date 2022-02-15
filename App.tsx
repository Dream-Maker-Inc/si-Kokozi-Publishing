import React from 'react'
import {StatusBar} from 'expo-status-bar'
import styled from '@emotion/native'

export default function App() {
	return (
		<StyledView>
			<StyledText>Open up App.tsx to start working on your app!</StyledText>
			<StatusBar style="auto"/>
		</StyledView>
	)
}

const StyledView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const StyledText = styled.Text`
  font-size: 20px;
  color: red;
`