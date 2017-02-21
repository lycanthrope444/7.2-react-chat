var React = require('react');
var Backbone = require('backbone');

var models = require('../models/models.js');

var Container = React.createClass({
  getInitialState: function(){
    // var userName = new models.LoginModel();
    var self = this;
    var messageList = new models.MessageCollection();
    messageList.fetch().done(function(){
      self.setState({messageList: messageList})
    })
    // self.setState({user: userName});
    // console.log(self);
    return {
      user: null,
      messages: messageList
    }
  },
  render: function(){
    // console.log(this.props);
    console.log(this.state);
    return (
      <div className="container">
        Container
        <LoginContainer data={this.state}/>
        <MessageForm />
      </div>
    )
  }
});

var LoginContainer = React.createClass({
  getInitialState: function(){
    console.log(this.props);
    // this.state = loginModel;
    return null;
  },
  render: function (){
    console.log(this.props)
    return (
      <div>
        LoginContainer
        <LoginForm user={this.props}/>
      </div>
    );
  }
});

var LoginForm = React.createClass({
  processLogin: function(event){
    // event.preventDefault();

  },
  render: function (){
    console.log(this.props);
    return (
      <form>
        <div className ="form-group">
          <label htmlFor="login">Login Name</label>
          <input idAttribute="login" className="form-control" placeholder="Login" />
          <button className="login btn" onClick= {this.processLogin} >Login</button>
        </div>
      </form>
    );
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
