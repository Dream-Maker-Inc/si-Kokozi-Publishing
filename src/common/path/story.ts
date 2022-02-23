const PATH = 'kokozi/assets/story/'

const storyPaths = {
	story: {
		blank: {
			invite: {
				image: require(PATH + 'story/blank/invite/image.png'),
				text: require(PATH + 'story/blank/invite/text.png')
			},
			record: {
				image: require(PATH + 'story/blank/record/image.png'),
				text: require(PATH + 'story/blank/record/text.png')
			},
		},
		noBlank: {
			addGuest: require(PATH + 'story/no-blank/add-guest.png')
		}
	},
	playlist: {
		blank: {
			text: require(PATH + 'playlist/blank/text.png'),
			image: require(PATH + 'playlist/blank/image.png')
		}
	}
}

export default storyPaths