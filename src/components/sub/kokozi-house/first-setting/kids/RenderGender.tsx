import React, {useState} from 'react'
import styled from '@emotion/native'
import {Text, View} from 'react-native'
import {RadioButton} from 'react-native-paper'
import {navyColor} from '../../../../../common/Colors'
import {ColumnTitle, ContainerColumn} from './renderNickname'

const RadioWrapper = styled(View)`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-right: 16px;
`
const RadioLabel = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  color: ${navyColor};
`
export const RenderGender = () => {
	const [checked, setChecked] = useState('남아')

	return <ContainerColumn>
		<ColumnTitle>성별</ColumnTitle>

		<RadioWrapper>
			<RadioButton
				value="남아"
				status={checked === '남아' ? 'checked' : 'unchecked'}
				onPress={() => setChecked('남아')}
			/>
			<RadioLabel onPress={() => setChecked('남아')}>남아</RadioLabel>

			<RadioButton
				value="여아"
				status={checked === '여아' ? 'checked' : 'unchecked'}
				onPress={() => setChecked('여아')}
			/>
			<RadioLabel onPress={() => setChecked('여아')}>여아</RadioLabel>
		</RadioWrapper>

	</ContainerColumn>
}