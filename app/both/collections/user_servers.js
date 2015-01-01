Schemas.UserServers = new SimpleSchema({
	active: {
		type: String,
		label: 'Active'
	},
	channels: {
		type: String,
		label: 'Channels'
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
	current_nick: {
		type: String,
		label: 'Current Nick'
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
	nick: {
		type: String,
		label: 'Nick'
	},
	real_name: {
		type: String,
		label: 'Real Name'
	},
	server_id: {
		type: String,
		label: 'Server Id'
	},
	status: {
		type: String,
		label: 'Status'
	},
	user: {
		type: String,
		label: 'User'
	},
	user_id: {
		type: String,
		label: 'User Id'
	}
});
UserServers.attachSchema(Schemas.UserServers);
