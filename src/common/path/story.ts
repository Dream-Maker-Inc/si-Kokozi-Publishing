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
	},
	record: {
		start: {
			text: require(PATH + 'record/start/text.png'),
			record: require(PATH + 'record/start/record.png'),
			countdown: require(PATH + 'record/start/countdown.png'),
			stop: require(PATH + 'record/start/stop.png')
		},
		finish: {
			text: require(PATH + 'record/finish/text.png'),
			image: require(PATH + 'record/finish/image.png')
		},
		recording: require(PATH + 'record/recording.gif')
	}
}

export default storyPaths