import styled from '@emotion/native'
import {FlatList, SafeAreaView} from 'react-native'
import {BeigeSecondColor, BeigeThirdColor, primaryColor} from '../../../../../common/Colors'
import CustomHeader from '../../../../../components/global/header/CustomHeader'
import {HostData} from '../../data/playlist'
import React from 'react'
import RenderHostItem from '../../../../../components/sub/story/share/select-host/RenderHostItem'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ButtonWrapper = styled.View`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90px;
  bottom: 0;
  border-top-width: 1px;
  border-top-color: ${BeigeThirdColor};
`

const RemoveButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 48px;
  border-radius: 8px;
  background-color: ${primaryColor};
`

const RemoveButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: white;
`

const SelectHost = () =>
	<PageWrapper>
		<CustomHeader statusBarColor="dark" title="호스트 선택하기" right="close"/>
		<FlatList data={HostData} renderItem={RenderHostItem}/>
		<ButtonWrapper>
			<RemoveButton>
				<RemoveButtonText>다음</RemoveButtonText>
			</RemoveButton>
		</ButtonWrapper>
	</PageWrapper>

export default SelectHost