var Backbone = require('backbone');
var Moment = require('moment');

var LoginModel = Backbone.Collection.extend({

});

var MessageModel = Backbone.Model.extend({
  id: '_id',
  defaults: {
    username: 'somebody',
    message: 'stuff here'
  },
  initialize: function(){
   this.isNew() ? this.set('timestamp', Moment().format('LTS')) : this.set('timestamp', this.get('timestamp'));
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
