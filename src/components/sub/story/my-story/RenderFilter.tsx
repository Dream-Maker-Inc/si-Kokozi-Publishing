import React, {useState} from 'react'
import styled from '@emotion/native'
import {Picker} from '@react-native-picker/picker'
import {BeigeFifthColor, BeigeThirdColor} from '../../../../common/Colors'

const FilterWrapper = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 67px;
  padding: 0 8px;
  border-bottom-color: ${BeigeThirdColor};
  border-bottom-width: 1px;
`

const StoryFilterContainer = styled.View`
  display: flex;
  justify-content: center;
  width: 120px;
  height: 35px;
  margin-left: 8px;
  border-radius: 20px;
  background-color: ${BeigeThirdColor};
`

const StoryFilter = styled(Picker)`
  width: 100%;
  height: 100%;
`

const RenderFilter = () => {
	const [storyFilter, setStoryFilter] = useState()

	return <FilterWrapper>
		<StoryFilterContainer>
			<StoryFilter selectedValue={storyFilter} dropdownIconColor={BeigeFifthColor} mode="dropdown">
				<Picker.Item label="AAAA" value="AAAA"/>
				<Picker.Item label="AAAA" value="AAAA"/>
			</StoryFilter>
		</StoryFilterContainer>
		<StoryFilterContainer>
			<StoryFilter selectedValue={storyFilter} dropdownIconColor={BeigeFifthColor} mode="dropdown">
				<Picker.Item label="AAAA" value="AAAA"/>
				<Picker.Item label="AAAA" value="AAAA"/>
			</StoryFilter>
		</StoryFilterContainer>
	</FilterWrapper>
}

export default RenderFilter