(function () {
  var querystring = __meteor_bootstrap__.require('querystring');
  var urlParser = __meteor_bootstrap__.require('url');
  var app = __meteor_bootstrap__.app;

    app.use(function (req, res, next) {
	var parsedUrl = urlParser.parse(req.url);
	var parsedQuery = querystring.parse(parsedUrl.query);
	console.log('parsed query', parsedQuery);
	if (parsedQuery['method']) {
	    Fiber(function () {
		Meteor.call(parsedQuery['method'], JSON.parse(parsedQuery['data']));
	    }).run();
	}
        next();
    });
})();
