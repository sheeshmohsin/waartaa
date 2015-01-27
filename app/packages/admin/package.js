Package.describe({
  name: "admin",
  summary: "Admin Panel for Waartaa",
  version: "0.1.0"
});

Package.on_use(function (api, where) {
  api.use(["yogiben:admin@1.0.8", "aldeed:collection2@2.3.0"]);
  api.add_files('admin.js', ['client', 'server']);
  api.add_files('both/_config/adminConfig.js', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use('admin');
  api.add_files('admin_tests.js', ['client', 'server']);
});
