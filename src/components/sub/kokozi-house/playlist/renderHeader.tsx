import React from 'react'
import styled from '@emotion/native'
import {Caption} from 'react-native-paper'
import {TouchableOpacity} from 'react-native'

const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 40px;
  margin: 0 16px;
`
const CloseButton = styled(Caption)`
  font-size: 13px;
`
const renderHeader =
	<Header>
		<TouchableOpacity>
			<CloseButton>닫기</CloseButton>
		</TouchableOpacity>
	</Header>

export default renderHeader