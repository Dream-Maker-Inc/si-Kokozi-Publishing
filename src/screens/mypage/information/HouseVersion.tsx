import React from 'react'
import styled from '@emotion/native'
import {View} from 'react-native'
import {BeigeThirdColor} from '../../../common/Colors'
import CustomHeader from '../../../components/global/header/CustomHeader'
import renderVersionInformation, {
	PageWrapper
} from '../../../components/sub/mypage/information/house-version/renderVersionInformation'
import renderModelInformation from '../../../components/sub/mypage/information/house-version/renderModelInformation'
import Picker from '../../../components/global/picker/Picker'

const Divider = styled(View)`
  width: 90%;
  height: 1px;
  margin: 12px auto 32px;
  background-color: ${BeigeThirdColor};
`

const PickerWrapper = styled.View`
  display: flex;
  flex-direction: row;
`

const HouseVersion = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" left="back" title="코코지 하우스 정보"/>
		<PickerWrapper>
			<Picker defaultText="코코지 하우스"/>
		</PickerWrapper>
		{renderVersionInformation}
		<Divider/>
		{renderModelInformation}
	</PageWrapper>

export default HouseVersion