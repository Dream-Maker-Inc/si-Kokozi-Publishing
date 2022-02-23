import styled from '@emotion/native'
import {Text, View} from 'react-native'
import {BeigeFifthColor, BeigeThirdColor, navyColor} from '../../../../../common/Colors'
import {TextInput} from 'react-native-paper'
import React from 'react'

export const ContainerColumn = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 68px;
  border-bottom-width: 1px;
  border-bottom-color: ${BeigeThirdColor};
`
export const ColumnTitle = styled(Text)`
  font-weight: bold;
  font-size: 16px;
  margin-left: 27px;
  color: ${navyColor};
`
export const ColumnInput = styled(TextInput)`
  flex-grow: 1;
  height: 100%;
  background-color: transparent;
  text-align: right;
  color: ${navyColor};
`
const renderNickname =
	<ContainerColumn>
		<ColumnTitle>애칭</ColumnTitle>
		<ColumnInput
			mode="outlined"
			placeholder="아이의 애칭을 입력해주세요"
			placeholderTextColor={BeigeFifthColor}
			outlineColor="transparent"
			activeOutlineColor="transparent"
		/>
	</ContainerColumn>

export default renderNickname