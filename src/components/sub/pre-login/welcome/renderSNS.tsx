import React from 'react'
import styled from '@emotion/native'
import {Text, TouchableOpacity} from 'react-native'
import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../../common/ImagePaths'
import {BeigeFifthColor} from '../../../../common/Colors'

const CaptionText = styled(Text)`
  margin: 24px 0;
  color: ${BeigeFifthColor};
  font-size: 13px;
  text-align: center;
`

const ButtonContainer = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: row;
`

const AppleButton = styled(AutoHeightImage)`
  margin-left: 24px;
`

export const renderSNS = <>
	<CaptionText>또는 다른 서비스 계정으로 회원가입</CaptionText>
	<ButtonContainer>
		<TouchableOpacity>
			<AutoHeightImage source={ImagePaths.components.sns.kakao} width={50}/>
		</TouchableOpacity>
		<TouchableOpacity>
			<AppleButton source={ImagePaths.components.sns.apple} width={50}/>
		</TouchableOpacity>
	</ButtonContainer>
</>