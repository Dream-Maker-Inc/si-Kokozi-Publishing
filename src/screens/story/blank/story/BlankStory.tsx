import React from 'react'
import styled from '@emotion/native'
import {ScrollView, View} from 'react-native'
import ImagePaths from '../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import {BeigeSecondColor, BeigeThirdColor} from '../../../../common/Colors'
import OutlinedAddButton from '../../../../components/global/buttons/outlined/OutlinedAddButton'

const PageWrapper = styled.SafeAreaView`
  display: flex;
  align-items: center;
  background-color: ${BeigeSecondColor};
`

const StyledScrollView = styled(ScrollView)`
  width: 100%;
`

const ScreenImage = styled(AutoHeightImage)`
  margin: 40px auto 24px;
`

const ScreenText = styled(AutoHeightImage)`
  margin-bottom: 16px;
`

const Divider = styled(View)`
  width: 100%;
  height: 8px;
  margin: 32px;
  background-color: ${BeigeThirdColor};
`

const Spacer = styled(View)`
  height: 32px;
`

const renderRecord =
	<>
		<ScreenImage source={ImagePaths.story.story.blank.record.image} width={72}/>
		<ScreenText source={ImagePaths.story.story.blank.record.text} width={360}/>
		<OutlinedAddButton title={'녹음하기'}/>

	</>

const renderInvite =
	<>
		<ScreenImage source={ImagePaths.story.story.blank.invite.image} width={72}/>
		<ScreenText source={ImagePaths.story.story.blank.invite.text} width={360}/>
		<OutlinedAddButton title={'초대하기'}/>
	</>

const BlankStory = () =>
	<PageWrapper>
		<StyledScrollView contentContainerStyle={{alignItems: 'center'}}>
			{renderRecord}
			<Divider/>
			{renderInvite}
			<Spacer/>
		</StyledScrollView>
	</PageWrapper>

export default BlankStory