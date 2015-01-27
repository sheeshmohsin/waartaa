ChannelNicks = new Meteor.Collection("channel_nicks");
/*
ChannelNicks: {
  'channel_name': String,
  'server_name': String,
  'nick': String
}
*/

Schemas.ChannelNicks = new SimpleSchema({
    channel_name: {
        type: String,
        optional: true,
        label: 'Channel Name'
    },
    server_name: {
        type: String,
        optional: true,
        label: 'Server Name' 
    },
    nick: {
        type: String,
        optional: true,
        label: 'Nick'
    }
});
ChannelNicks.attachSchema(Schemas.ChannelNicks);

