var Backbone = require('backbone');

var LoginModel = Backbone.Collection.extend({

});

var MessageModel = Backbone.Model.extend({
  id: '_id',
  defaults: {
    username: 'somebody',
    message: 'stuff here',
    timestamp: 'the time'
  }
});

var MessageCollection = Backbone.Collection.extend({
  model: MessageModel,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/messages'
});

module.exports = {
  LoginModel: LoginModel,
  MessageModel: MessageModel,
  MessageCollection: MessageCollection
};
