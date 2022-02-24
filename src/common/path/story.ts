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
			detail: {
				playlist: require(PATH + 'story/blank/detail/playlist.png'),
				share: require(PATH + 'story/blank/detail/share.png')
			}
		},
		noBlank: {
			addGuest: require(PATH + 'story/no-blank/add-guest.png'),
			pause: require(PATH + 'story/no-blank/pause.png')
		},
		share: {
			recordFinish: {
				text: require(PATH + 'story/share/record-finish/text.png'),
				image: require(PATH + 'story/share/record-finish/image.png'),
			},
			checklist: {
				text: require(PATH + 'story/share/checklist/text.png'),
			}
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