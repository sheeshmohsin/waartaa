Servers = new Meteor.Collection("servers");
/*
Severs: {
  name: String,
  creator: String <username>,
  creator_id: String <user_id>,
  last_updater: String,
  last_updater_id: String,
  created: Date,
  last_updated: Date,
  connections: List of items like {url: 'irc.freenode.net', port: '6667'}
}
*/

Schemas.Servers = new SimpleSchema({
    name: {
        type: String,
        optional: true,
        label: 'Name'
    },
    connections: {
        type: [Object],
        optional: true,
        label: 'Connections'
    },
    "connections.$.url": {
        type: String,
        optional: true,
    },
    "connections.$.port": {
        type: String,
        optional: true,
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
        label: 'Creator id'
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
   "ssl.cert_file": {
        type: String,
        optional: true,
        label: 'SSL Cert File'
   },
   "ssl.ca_file": {
        type: String,
        optional: true,
        label: 'SSL CA File'
   }
});
Servers.attachSchema(Schemas.Servers);

