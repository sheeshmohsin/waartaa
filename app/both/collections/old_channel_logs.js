Schemas.OldChannelLogs = new SimpleSchema({
	message: {
		type: String,
		label: 'Messsage'
	},
	"raw_message.prefix": {
		type: String,
		label: 'Raw Message (Prefix)'
	},
	"raw_message.nick": {
		type: String,
		label: 'Raw Message (Nick)'
	},
	"raw_message.user": {
		type: String,
		label: 'Raw Message (User)'
	},
	"raw_message.host": {
		type: String,
		label: 'Raw Message (Host)'
	},
	"raw_message.command": {
		type: String,
		label: 'Raw Message (Command)'
	},
	"raw_message.rawCommand": {
		type: String,
		label: 'Raw Message (rawCommand)'
	},
	"raw_message.commandType": {
		type: String,
		label: 'Raw Message (Command Type)'
	},
	"raw_message.args":{
		type: String,
		label: 'Raw Message (Args)'
	},
	channel_name: {
		type: String,
		label: 'Channel Name'
	},
	channel_id: {
		type: String,
		label: 'Channel Id'
	},
	server_name: {
		type: String,
		label: 'Server Name'
	},
	server_id: {
		type: String,
		label: 'Server Id'
	},
	user: {
		type: String,
		label: 'User'
	},
	user_id: {
		type: String,
		label: 'User Id'
	},
	nick: {
		type: String,
		label: 'Nick'
	},
	created: {
		type: Date,
		label: 'Created'
	},
	last_updated: {
		type: Date,
		label: 'Last Updated'
	},
	type: {
		type: String,
		label: 'Type'
	},
	global: {
		type: String,
		label: 'Global'
	},
	not_for_user: {
		type: String,
		label: 'Not for User'
	}
});
OldChannelLogs.attachSchema(Schemas.OldChannelLogs);