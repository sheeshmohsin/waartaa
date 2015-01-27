OldChannelLogs = new Meteor.Collection("old_channel_logs");

Schemas.OldChannelLogs = new SimpleSchema({
    message: {
        type: String,
        optional: true,
        label: 'Messsage'
    },
    "raw_message.prefix": {
        type: String,
        optional: true,
        label: 'Raw Message (Prefix)'
    },
    "raw_message.nick": {
        type: String,
        optional: true,
        label: 'Raw Message (Nick)'
    },
    "raw_message.user": {
        type: String,
        optional: true,
        label: 'Raw Message (User)'
    },
    "raw_message.host": {
        type: String,
        optional: true,
        label: 'Raw Message (Host)'
    },
    "raw_message.command": {
        type: String,
        optional: true,
        label: 'Raw Message (Command)'
    },
    "raw_message.rawCommand": {
        type: String,
        optional: true,
        label: 'Raw Message (rawCommand)'
    },
    "raw_message.commandType": {
        type: String,
        optional: true,
        label: 'Raw Message (Command Type)'
    },
    "raw_message.args":{
        type: String,
        optional: true,
        label: 'Raw Message (Args)'
    },
    channel_name: {
        type: String,
        optional: true,
        label: 'Channel Name'
    },
    channel_id: {
        type: String,
        optional: true,
        label: 'Channel Id'
    },
    server_name: {
        type: String,
        optional: true,
        label: 'Server Name'
    },
    server_id: {
        type: String,
        optional: true,
        label: 'Server Id'
    },
    user: {
        type: String,
        optional: true,
        label: 'User'
    },
    user_id: {
        type: String,
        optional: true,
        label: 'User Id'
    },
    nick: {
        type: String,
        optional: true,
        label: 'Nick'
    },
    created: {
        type: Date,
        optional: true,
        label: 'Created'
    },
    last_updated: {
        type: Date,
        optional: true,
        label: 'Last Updated'
    },
    type: {
        type: String,
        optional: true,
        label: 'Type'
    },
    global: {
        type: String,
        optional: true,
        label: 'Global'
    },
    not_for_user: {
        type: String,
        optional: true,
        label: 'Not for User'
    }
});
OldChannelLogs.attachSchema(Schemas.OldChannelLogs);