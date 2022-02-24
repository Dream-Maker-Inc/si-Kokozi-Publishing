import React from 'react'
import styled from '@emotion/native'
import {BeigeFifthColor, primaryColor} from '../../../../../common/Colors'

const Footer = styled.View`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  bottom: 16px;
`

const CaptionText = styled.Text`
  text-align: center;
  font-size: 12px;
  color: ${BeigeFifthColor};
  margin-bottom: 32px;
`

const ShareButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 48px;
  border-radius: 8px;
  background-color: ${primaryColor};
`

const ShareButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`

const renderFooter =
	<Footer>
		<CaptionText>
			{`공유된 콘텐츠에 대해서는 ‘코코지 이용 약관'이 적용됩니다.
‘코코지 이용 약관'을 위반하는 내용의 콘텐츠가 발견된 경우,
서버에서 데이터가 삭제될 수 있습니다.`}
		</CaptionText>
		<ShareButton>
			<ShareButtonText>공유하기</ShareButtonText>
		</ShareButton>
	</Footer>

export default renderFooter