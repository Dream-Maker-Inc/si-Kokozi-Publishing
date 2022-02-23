import React from 'react'
import {View} from 'react-native'
import styled from '@emotion/native'
import renderBirth from './RenderBirth'
import {RenderGender} from './RenderGender'
import renderNickname from './renderNickname'
import {BeigeThirdColor} from '../../../../../common/Colors'

const InputContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0 16px;
  border-top-color: ${BeigeThirdColor};
  border-top-width: 1px;
`

const RenderInput = () => {
	return <InputContainer>
		{renderNickname}
		<RenderGender/>
		{renderBirth}
	</InputContainer>
}
export default RenderInput