UserChannels = new Meteor.Collection("user_channels");
/*
UserChannels: {
  name: String,
  server_id: String,
  server_name: String,
  //nicks: Dictionary,
  password: String,
  unread_logs_count: Integer,
  mentions_count: Integer,
  creator: String,
  creator_id: String,
  last_updater: String,
  last_updater_id: String,
  created: Date,
  last_updated: Date
}
*/

Schemas.UserChannels = new SimpleSchema({
    active: {
        type: Boolean,
        optional: true,
        label: 'Active'
    },
    created: {
        type: String,
        optional: true,
        label: 'Created'
    },
    creator: {
        type: String,
        optional: true,
        label: 'Creator'
    },
    nicks: {
        type: String,
        optional: true,
        label: 'Nicks'
    },
    creator_id: {
        type: String,
        optional: true,
        label: 'Creator Id'
    },
    last_updated: {
        type: String,
        optional: true,
        label: 'Last Updated'
    },
    last_updater: {
        type: String,
        optional: true,
        label: 'Last Updater'
    },
    last_updater_id: {
        type: String,
        optional: true,
        label: 'Last Updater Id'
    },
    name: {
        type: String,
        label: 'Name'
    },
    server_active: {
        type: Boolean,
        optional: true,
        label: 'Server Active'
    },
    status: {
        type: String,
        optional:true,
        label: 'Status'
    },
    topic: {
        type: String,
        optional: true,
        label: 'Topic'
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
    user_server_id: {
        type: String,
        optional: true,
        label: 'User Server Id'
    },
    user_server_name: {
        type: String,
        optional: true,
        label: 'User Server Name'
    }
});
UserChannels.attachSchema(Schemas.UserChannels);
