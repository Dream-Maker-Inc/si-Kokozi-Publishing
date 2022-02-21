import React from 'react'
import styled from '@emotion/native'
import {SafeAreaView, StatusBar, Text, TouchableOpacity} from 'react-native'
import IconHeaderCloseDark from '../../components/header/dark/IconHeaderCloseDark'
import {BeigeSecondColor, primaryColor} from '../../common/Colors'
import PagerView from 'react-native-pager-view'
import AutoHeightImage from 'react-native-auto-height-image'

const PageWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const ContentsContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
`

const ViewPager = styled(PagerView)`
  height: 600px;
  margin-top: 56px;
`

const SkipButton = styled(Text)`
  width: 100%;
  text-align: center;
  color: ${primaryColor};
`

const Intro = () => <PageWrapper>
	<IconHeaderCloseDark/>

	<ViewPager showPageIndicator>
		<ContentsContainer>
			<AutoHeightImage source={require('../../../assets/pre-login/intro/text.png')} width={200}/>
			<AutoHeightImage source={require('../../../assets/pre-login/intro/image.png')} width={400}/>
		</ContentsContainer>
		<ContentsContainer>
			<AutoHeightImage source={require('../../../assets/pre-login/intro/text.png')} width={200}/>
			<AutoHeightImage source={require('../../../assets/pre-login/intro/image.png')} width={400}/>
		</ContentsContainer>
		<ContentsContainer>
			<AutoHeightImage source={require('../../../assets/pre-login/intro/text.png')} width={200}/>
			<AutoHeightImage source={require('../../../assets/pre-login/intro/image.png')} width={400}/>
		</ContentsContainer>
	</ViewPager>

	<TouchableOpacity>
		<SkipButton>건너뛰기</SkipButton>
	</TouchableOpacity>

	<StatusBar backgroundColor={BeigeSecondColor} barStyle="dark-content"/>
</PageWrapper>

export default Intro