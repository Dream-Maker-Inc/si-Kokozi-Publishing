import React from 'react'
import styled from '@emotion/native'
import PagerView from 'react-native-pager-view'
import ImagePaths from '../../../../common/ImagePaths'
import AutoHeightImage from 'react-native-auto-height-image'
import { BeigeSecondColor, primaryColor } from '../../../../common/Colors'

const PageWrapper = styled.SafeAreaView`
  display: flex;
  flex: 1;

  width: 100%;
  background-color: ${BeigeSecondColor};
`

const ViewPager = styled(PagerView)`
  flex: 1;
`

const ButtonWrapper = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80%;
  height: 50px;
  margin-top: 70px;

  border-radius: 10px;
  background-color: ${primaryColor};
`

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
`

const SliderItemWrapper = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ScreenImage = styled(AutoHeightImage)`
  margin-top: 24px;
`

const renderSliderItem =
  <SliderItemWrapper>
  	<AutoHeightImage width={182} source={ImagePaths.arti.magicArti.blank.first.text}/>
  	<ScreenImage width={200} source={ImagePaths.arti.magicArti.blank.first.image}/>
  	<ButtonWrapper>
  		<ButtonText>매직아띠 등록하기</ButtonText>
  	</ButtonWrapper>
  </SliderItemWrapper>

const MagicArti = () =>
	<PageWrapper>
		<ViewPager showPageIndicator>
			{renderSliderItem}
			{renderSliderItem}
			{renderSliderItem}
		</ViewPager>
	</PageWrapper>

export default MagicArti