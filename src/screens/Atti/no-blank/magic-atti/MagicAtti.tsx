import React from 'react'
import {Image, View} from 'react-native'
import styled from '@emotion/native'
import PagerView from 'react-native-pager-view'
import {Text} from 'react-native-paper'

import {backgroundColor, primaryColor} from '../../../../common/Colors'

const MagicAtti = () => <PageWrapper>
	<PagerView
		style={{flex: 1}}
		showPageIndicator>
		<View>
			<Image
				style={{
					width: '50%',
					marginTop: '14%',
					marginLeft: 'auto',
					marginRight: 'auto'
				}}
				resizeMode="contain"
				source={require('../../../../../assets/atti/magic-atti/blank-text-1.png')}/>
			<Image
				style={{
					width: '100%',
					height: '50%'
				}}
				resizeMode="contain"
				source={require('../../../../../assets/atti/magic-atti/blank-image-1.png')}/>
			<StyledButton>
				<Text
					style={{
						color: 'white',
						fontWeight: 'bold',
						fontSize: 18
					}}
				>매직아띠 등록하기</Text>
			</StyledButton>
		</View>
		<View>
			<Image
				style={{
					width: '60%',
					marginTop: '14%',
					marginLeft: 'auto',
					marginRight: 'auto'
				}}
				resizeMode="contain"
				source={require('../../../../../assets/atti/magic-atti/blank-text-2.png')}/>
			<Image
				style={{
					width: '100%',
					height: '50%'
				}}
				resizeMode="contain"
				source={require('../../../../../assets/atti/magic-atti/blank-image-2.png')}/>
			<StyledButton>
				<Text
					style={{
						color: 'white',
						fontWeight: 'bold',
						fontSize: 18
					}}
				>매직아띠 등록하기</Text>
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

export default MagicAtti