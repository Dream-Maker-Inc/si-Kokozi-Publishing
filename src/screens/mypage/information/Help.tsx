import React from 'react'
import {SafeAreaView, StatusBar, View} from 'react-native'
import styled from '@emotion/native'
import {BeigeSecondColor, BeigeForthColor, BeigeThirdColor, navyColor} from '../../../common/Colors'
import HeaderBackDark from '../../../components/header/dark/HeaderBackDark'
import {Caption, TextInput} from 'react-native-paper'
import {Picker} from '@react-native-picker/picker'

const PageWrapper = styled(SafeAreaView)`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${BeigeSecondColor};
`

const SearchWrapper = styled(View)`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${BeigeThirdColor};
`

const SearchInput = styled(TextInput)`
  width: 90%;
  margin: 0 auto;
  background-color: transparent;
`

const FilterWrapper = styled(View)`
  width: 100px;
  height: 50px;
  margin: 20px;
  border-radius: 20px;
  overflow: hidden;
`

const FilterPicker = styled(Picker)`
  width: 100%;
  height: 100%;
  background-color: ${BeigeThirdColor};
`

const CaptionText = styled(Caption)`
  width: 100%;
  font-size: 15px;
  font-weight: bold;
  margin: 20px;
  color: ${navyColor};
`

const FAQListWrapper = styled(View)`
  width: 100%;

`

const renderSearchContainer =
	<SearchWrapper>
		<SearchInput
			mode="outlined"
			placeholder="어떤 문제나 에러코드가 있나요?"
			placeholderTextColor={BeigeForthColor}
			activeOutlineColor={BeigeForthColor}
			outlineColor={BeigeForthColor}
		/>
		<FilterWrapper>
			<FilterPicker>
				<Picker.Item label="전체" value="전체"/>
				<Picker.Item label="전체" value="전체"/>
				<Picker.Item label="전체" value="전체"/>
			</FilterPicker>
		</FilterWrapper>
	</SearchWrapper>

const RenderFAQList = () =>
	<>

	</>

const Help = () =>
	<PageWrapper>
		<HeaderBackDark title={'도움말'}/>
		{renderSearchContainer}
		<CaptionText>자주 묻는 질문</CaptionText>
		<StatusBar barStyle="dark-content" backgroundColor={BeigeSecondColor}/>
	</PageWrapper>

export default Help