const PATH = 'kokozi/assets/atti/'

const artiPaths = {
	all: {
		blankImage: require(PATH + 'all/blank-image.png'),
		blankText: require(PATH + 'all/blank-text.png'),
		thumbnail: require(PATH + 'all/thumbnail.png')
	},
	detail: {
		thumbnail: require(PATH + 'detail/thumbnail.png')
	},
	magicArti: {
		blank: {
			first: {
				image: require(PATH + 'magic-atti/blank/first/image.png'),
				text: require(PATH + 'magic-atti/blank/first/text.png'),
			},
			second: {
				image: require(PATH + 'magic-atti/blank/second/image.png'),
				text: require(PATH + 'magic-atti/blank/second/text.png'),
			}
		}
	},
	playlist: {
		blank: {
			image: require(PATH + 'playlist/blank/image.png'),
			text: require(PATH + 'playlist/blank/text.png')
		},
		thumbnail: require(PATH + 'playlist/thumbnail.png')
	},
	register: {
		error: {
			alreadyRegistered: {
				image: require(PATH + 'register/error/already-registered/image.png'),
				text: require(PATH + 'register/error/already-registered/text.png')
			},
			cannotFind: {
				text: require(PATH + 'register/error/cannot-find/text.png')
			}
		},
		name: {
			image: require(PATH + 'register/name/image.png'),
			text: require(PATH + 'register/name/text.png')
		},
		putIn: {
			image: require(PATH + 'register/put-in/image.png'),
			text: require(PATH + 'register/put-in/text.png')
		},
		success: {
			image: require(PATH + 'register/success/image.png'),
			text: require(PATH + 'register/success/text.png')
		},
	},
	blankThumbnail: require(PATH + 'blank-thumbnail.png')
}

export default artiPaths