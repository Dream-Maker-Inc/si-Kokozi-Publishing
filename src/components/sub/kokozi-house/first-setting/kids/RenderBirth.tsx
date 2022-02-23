import React from 'react'
import {BeigeFifthColor} from '../../../../../common/Colors'
import {ColumnInput, ColumnTitle, ContainerColumn} from './renderNickname'

const renderBirth =
	<ContainerColumn>
		<ColumnTitle>생일</ColumnTitle>
		<ColumnInput
			mode="outlined"
			placeholder="생년월일 6자리를 입력해주세요"
			placeholderTextColor={BeigeFifthColor}
			outlineColor="transparent"
			activeOutlineColor="transparent"
		/>
	</ContainerColumn>

export default renderBirth