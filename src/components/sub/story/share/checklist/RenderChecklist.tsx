import React from 'react'
import styled from '@emotion/native'
import {navyColor} from '../../../../../common/Colors'
import ImagePaths from '../../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'

const CheckListWrapper = styled.View`
  display: flex;
  width: 312px;
  padding: 42px 0 15px;
  background-color: #F0E4D5;
  border-radius: 8px;
`

const CheckListRow = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
  margin-left: 56px;
`

const CheckListText = styled.Text`
  font-size: 14px;
  color: ${navyColor};
  margin-left: 20px;
`

const renderChecklist =
	<CheckListWrapper>
		<CheckListRow>
			<AutoHeightImage source={ImagePaths.components.icons.check} width={16}/>
			<CheckListText>타인의 권리를 침해하는 내용</CheckListText>
		</CheckListRow>
		<CheckListRow>
			<AutoHeightImage source={ImagePaths.components.icons.check} width={16}/>
			<CheckListText>타인에게 불쾌감을 주는 내용</CheckListText>
		</CheckListRow>
		<CheckListRow>
			<AutoHeightImage source={ImagePaths.components.icons.check} width={16}/>
			<CheckListText>위법한 내용이나 개인정보</CheckListText>
		</CheckListRow>
	</CheckListWrapper>

export default renderChecklist