import React from 'react'
import {SafeAreaView, StatusBar} from 'react-native'
import {backgroundColor} from '../../../../common/Colors'
import HeaderBackDark from '../../../../components/header/dark/HeaderBackDark'
import styled from '@emotion/native'
import OutlinedAddButton from '../../../../components/buttons/outlined/OutlinedAddButton'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${backgroundColor};
`

const PageContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${backgroundColor};
`

const EmptyText = styled.Image`
  width: 90%;
  height: 100px;
`

const EmptyImage = styled.Image`
  width: 60%;
  margin-top: 60px;
  height: 240px;
`

const PlaylistEmpty = () => <PageWrapper>
	<HeaderBackDark title="플레이리스트"/>
	<PageContainer>
		<EmptyText resizeMode="contain" source={require('../../../../../assets/atti/playlist/empty-text.png')}/>
		<EmptyImage resizeMode="contain" source={require('../../../../../assets/atti/playlist/empty-image.png')}/>
		<OutlinedAddButton title="플레이리스트 만들기"/>
	</PageContainer>
	<StatusBar backgroundColor={backgroundColor} barStyle="dark-content"/>
</PageWrapper>

export default PlaylistEmpty