const PATH = 'kokozi/assets/mypage/'

const mypagePaths = {
	information: {
		image: require(PATH + 'information/image.png')
	},
	notice: {
		image: require(PATH + 'notice/image.png'),
		text: require(PATH + 'notice/text.png')
	},
	notification: {
		image: require(PATH + 'notification/image.png'),
		text: require(PATH + 'notification/text.png')
	},
	user: {
		guest: require(PATH + 'user/guest.png'),
		image: require(PATH + 'user/image.png'),
		text: require(PATH + 'user/text.png')
	}
}

export default mypagePaths