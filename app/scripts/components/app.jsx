var React = require('react');
var Backbone = require('backbone');

var models = require('../models/models.js');

var LoginContainer = React.createClass({
  getInitialState: function(){
    // var loginModel = new models.LoginModel;
    // this.state = loginModel;
    return null;
  },
  render: function (){
    return (
      <div className="container">
        LoginContainer
        <LoginForm />
      </div>
    );
  }
});

var LoginForm = React.createClass({
  render: function (){
    return (
      <div>
        Login Form
      </div>
    );
  }
});

var Container = React.createClass({
  getInitialSate: function(){
    var messages = new models.MessageCollection();
    return null;
  },
  render: function(){
    return (
      <div className="container">
        Container
        <MessageForm />
      </div>
    )
  }
});

var MessageForm = React.createClass({
    render: function(){
      return (
        <div>

        </div>
      )
    }
});

module.exports ={
  Container,
  LoginContainer
};
