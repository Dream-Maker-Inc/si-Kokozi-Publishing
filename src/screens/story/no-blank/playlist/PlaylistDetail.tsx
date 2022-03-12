import React from 'react'
import styled from '@emotion/native'
import {ScrollView, View} from 'react-native'
import {StoryData} from '../../../../data/Data'
import {BeigeSecondColor, navyColor} from '../../../../common/Colors'
import CustomHeader from '../../../../components/global/header/CustomHeader'
import renderProfile from '../../../../components/sub/arti/no-blank/detail/RenderProfile'
import renderStoryHeader from '../../../../components/sub/arti/no-blank/detail/renderStoryHeader'
import ListItem from '../../../../components/list-items/components/ListItem'
import AutoHeightImage from 'react-native-auto-height-image'
import ImagePaths from '../../../../common/ImagePaths'

const StoryListWrapper = styled(View)`
  background-color: ${BeigeSecondColor};
  padding: 0 16px;
`

const AuthorContainer = styled.View`
  background-color: ${BeigeSecondColor};
  padding: 24px 16px;
`

const TitleText = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${navyColor};
`

const AuthorItem = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 16px;
`

const AuthorText = styled.Text`
  font-size: 15px;
  color: ${navyColor};
  margin-left: 16px;
`

const Detail = () =>
	<>
		<CustomHeader statusBarColor="light" left="back" title="플레이리스트" right="edit"/>

		<ScrollView>
			{renderProfile}
			{renderStoryHeader}

			<StoryListWrapper>
				{StoryData.map(item =>
					<ListItem
						key={item.index}
						title={item.title}
						prefix={item.index}
						caption={item.author}
						time={item.time}
						right="play"
					/>
				)}
			</StoryListWrapper>

			<AuthorContainer>
				<TitleText>만든 사람</TitleText>
				<AuthorItem>
					<AutoHeightImage source={ImagePaths.arti.all.thumbnail} width={56}/>
					<AuthorText>호스트</AuthorText>
				</AuthorItem>
			</AuthorContainer>
		</ScrollView>
	</>

export default Detail