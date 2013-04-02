Package.describe({
  summary: "Handle certain urls a certain way"
});

Package.on_use(function (api) {
  api.add_files('handler.js', 'server');
});
