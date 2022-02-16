import React from 'react'
import styled from '@emotion/native'
import {backgroundColor, primaryColor} from '../../../common/Colors'
import PagerView from 'react-native-pager-view'
import {View} from 'react-native'

const MagicAtti = () => <PageWrapper>
	<PagerView
		style={{flex: 1}}
		showPageIndicator>
		<View>
			<StyledText
				resizeMode="contain"
				source={require('../../../../assets/atti/magic-atti/blank-text-1.png')}/>
			<StyledImage
				resizeMode="contain"
				source={require('../../../../assets/atti/magic-atti/blank-image-1.png')}/>
			<StyledButton>
				<StyledButtonText>매직아띠 등록하기</StyledButtonText>
			</StyledButton>
		</View>
		<View>
			<StyledText
				style={{width: '60%'}}
				resizeMode="contain"
				source={require('../../../../assets/atti/magic-atti/blank-text-2.png')}/>
			<StyledImage
				resizeMode="contain"
				source={require('../../../../assets/atti/magic-atti/blank-image-2.png')}/>
			<StyledButton>
				<StyledButtonText>매직아띠 등록하기</StyledButtonText>
			</StyledButton>
		</View>
	</PagerView>
</PageWrapper>

const PageWrapper = styled.SafeAreaView`
  display: flex;
  flex: 1;
  
  width: 100%;
  background-color: ${backgroundColor};
`

const StyledText = styled.Image`
  width: 50%;
  margin: 14% auto 0;
`

const StyledButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80%;
  height: 50px;

  border-radius: 10px;

  margin-left: auto;
  margin-right: auto;

  background-color: ${primaryColor};
`

const StyledButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 18px;
`

const StyledImage = styled.Image`
  width: 100%;
  height: 50%;
`

export default MagicAtti