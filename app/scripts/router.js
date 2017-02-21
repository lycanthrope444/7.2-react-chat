var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var Container = require('./components/app.jsx').Container;
var LoginContainer = require('./components/app.jsx').LoginContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '':'login',
    // 'messages':'messages'
  },
  login: function(){
    ReactDOM.render(
      React.createElement(Container),
      document.getElementById('app')
    );
  },
  // messages: function(){
  //   ReactDOM.render(
  //     React.createElement(Container),
  //     document.getElementById('app')
  //   );
  // }

});

var appRouter = new AppRouter();

module.exports = appRouter;
