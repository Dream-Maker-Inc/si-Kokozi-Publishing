import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../../common/ImagePaths'
import React from 'react'
import styled from '@emotion/native'
import PagerView from 'react-native-pager-view'

const Container = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
`

const ViewPager = styled(PagerView)`
  width: 100%;
  height: 600px;
  margin-top: 56px;
`

export const RenderViewPager = () =>
	<ViewPager showPageIndicator>

		<Container>
			<AutoHeightImage source={ImagePaths.preLogin.intro.text} width={200}/>
			<AutoHeightImage source={ImagePaths.preLogin.intro.image} width={400}/>
		</Container>

		<Container>
			<AutoHeightImage source={ImagePaths.preLogin.intro.text} width={200}/>
			<AutoHeightImage source={ImagePaths.preLogin.intro.image} width={400}/>
		</Container>

		<Container>
			<AutoHeightImage source={ImagePaths.preLogin.intro.text} width={200}/>
			<AutoHeightImage source={ImagePaths.preLogin.intro.image} width={400}/>
		</Container>

	</ViewPager>

export default RenderViewPager