const PATH = 'kokozi/assets/kokozi-house/'

const kokoziHousePaths = {
	complete: {
		text: require(PATH + 'complete/text.png')
	},
	firstSetting: {
		apConnect: {
			finish: {
				image: require(PATH + 'initialize/ap-connect/finish/image.png'),
				text: require(PATH + 'initialize/ap-connect/finish/text.png')
			},
			start: {
				image: require(PATH + 'initialize/ap-connect/start/image.png'),
				text: require(PATH + 'initialize/ap-connect/start/text.png')
			}
		},
		kids: {
			text: require(PATH + 'initialize/kids/text.png')
		},
		name: {
			image: require(PATH + 'initialize/name/image.png'),
			text: require(PATH + 'initialize/name/text.png')
		},
		setting: {
			checklist: {
				text: require(PATH + 'initialize/setting/checklist/text.png')
			},
			connectionComplete: {
				image: require(PATH + 'initialize/setting/connection-complete/image.png'),
				text: require(PATH + 'initialize/setting/connection-complete/text.png')
			},
			start: {
				image: require(PATH + 'initialize/setting/start/image.png'),
				text: require(PATH + 'initialize/setting/start/text.png')
			}
		}
	},
	settingEtc: {
		alreadyRegistered: {
			image: require(PATH + 'setting-etc/already-registered/image.png'),
			text: require(PATH + 'setting-etc/already-registered/text.png')
		},
		illegalProduct: {
			image: require(PATH + 'setting-etc/illegal-product/image.png'),
			text: require(PATH + 'setting-etc/illegal-product/text.png')
		}
	},
	wifi: {
		checklist: {
			text: require(PATH + 'wifi/checklist/text.png')
		},
		complete: {
			image: require(PATH + 'wifi/complete/image.png'),
			text: require(PATH + 'wifi/complete/text.png')
		},
		information: {
			text: require(PATH + 'wifi/information/text.png')
		},
		process: {
			image: require(PATH + 'wifi/process/image.png'),
			text: require(PATH + 'wifi/process/text.png')
		}
	},
	help: require(PATH + 'help.png'),
	roundedBackground: require(PATH + 'rounded-background.png'),
	thumbnail: require(PATH + 'thumbnail.png')
}

export default kokoziHousePaths