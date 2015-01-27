UserServers = new Meteor.Collection("user_servers");
/*
UserServers: {
  name: String,
  server_id: String,
  nick: String,
  password: String,
  channels: A list of strings,
  user: String,
  user_id: String,
  created: Date,
  creator: String <username>,
  creator_id: Sring <user_id>,
  last_updated: Date,
  last_updater: String <username>,
  last_updater_id: String <user_id>,
  status: String (online/offline/connecting)
}
*/

Schemas.UserServers = new SimpleSchema({
    active: {
        type: Boolean,
        optional: true,
        label: 'Active'
    },
    channels: {
        type: [String],
        optional: true,
        label: 'Channels'
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
    creator_id: {
        type: String,
        optional: true,
        label: 'Creator Id'
    },
    current_nick: {
        type: String,
        optional: true,
        label: 'Current Nick'
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
        optional: true,
        label: 'Name'
    },
    nick: {
        type: String,
        optional: true,
        label: 'Nick'
    },
    real_name: {
        type: String,
        optional: true,
        label: 'Real Name'
    },
    server_id: {
        type: String,
        optional: true,
        label: 'Server Id'
    },
    status: {
        type: String,
        optional: true,
        label: 'Status'
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
    }
});
UserServers.attachSchema(Schemas.UserServers);
