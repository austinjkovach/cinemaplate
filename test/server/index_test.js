require(TEST_HELPER); // <--- This must be at the top of every test file.
var request = require('supertest');
var routes = require(__server + '/index.js');

describe("The Server", function() {

  var app = TestHelper.createApp();
  app.use('/', routes);
  app.testReady();

  it_("serves an example endpoint", function * () {

    //
    // Notice how we're in a generator function (indicated by the the *)
    // See test/test-helper.js for details of why this works.
    //
    yield request(app)
      .get('/api/match')
      .expect(200);
  })
})
