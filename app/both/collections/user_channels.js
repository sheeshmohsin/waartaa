Schemas.UserChannels = new SimpleSchema({
	active: {
		type: String,
		label: 'Active'
	},
	created: {
		type: Date,
		label: 'Created'
	},
	creator: {
		type: String,
		label: 'Creator'
	},
	creator_id: {
		type: String,
		label: 'Creator Id'
	},
	last_updated: {
		type: Date,
		label: 'Last Updated'
	},
	last_updater: {
		type: String,
		label: 'Last Updater'
	},
	last_updater_id: {
		type: String,
		label: 'Last Updater Id'
	},
	name: {
		type: String,
		label: 'Name'
	},
	server_active: {
		type: String,
		label: 'Server Active'
	},
	status: {
		type: String,
		label: 'Status'
	},
	topic: {
		type: String,
		label: 'Topic'
	},
	user: {
		type: String,
		label: 'User'
	},
	user_id: {
		type: String,
		label: 'User Id'
	},
	user_server_id: {
		type: String,
		label: 'User Server Id'
	},
	user_server_name: {
		type: String,
		label: 'User Server Name'
	}
});
UserChannels.attachSchema(Schemas.UserChannels);