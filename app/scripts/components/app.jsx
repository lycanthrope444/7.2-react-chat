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
  processLogin: function(event){
    event.preventDefault();
    this.setState({user: event.target.value});

    console.log('login clicked', this.state);
  },
  render: function(){
    // console.log(this.props);
    // console.log(this.state);
    return (
      <div className="container">
        <LoginForm processLogin={this.processLogin} data={this.state}/>
        <MessageForm data={this.state}/>
        <MessageList data={this.state}/>
      </div>
    )
  }
});

// var LoginContainer = React.createClass({
//   getInitialState: function(){
//     console.log(this.props);
//     // this.state = loginModel;
//     return null;
//   },
//   render: function (){
//     console.log(this.props)
//     return (
//       <div>
//         LoginContainer
//         <LoginForm user={this.props}/>
//       </div>
//     );
//   }
// });

var LoginForm = React.createClass({
  // processLogin: function(event){
  //   event.preventDefault();
  //   console.log('login clicked');
  //
  // },
  render: function (){
    // console.log('Login Form', this.props);
    return (
      <form>
        <div className ="form-group">
          <label htmlFor="login">Login Name</label>
          <input idAttribute="login" className="form-control" placeholder="Login" />
          <button className="login btn" onClick= {this.props.processLogin} >Login</button>
        </div>
      </form>
    );
  }
});

var MessageForm = React.createClass({
  submitMessage: function(event){
    event.preventDefault();
    console.log('message button click');
  },
  render: function(){
    console.log('mess Form', this.props);
    return (
      <form>
        <div className ="form-group">
          <label htmlFor="message">Write your message</label>
          <input idAttribute ="message" className="form-control"/>
          <button className="message btn" onClick={this.submitMessage}>Submit</button>
        </div>
      </form>
    )
  }
});

var MessageList = React.createClass({
  // filterList: function(){
  //
  //   console.log(refinedMess);
  // },
  render: function(){
    // console.log(this.filterList);
    var messageList = this.props.data.messages.models;
    // console.log(messageList);
    var refinedMess = messageList.map(function(iterator, index){
      return (
        <li key={index}>
          <div>{iterator.attributes.username}</div>
          <div>{iterator.attributes.message}</div>
          <div>{iterator.attributes.timestamp}</div>
        </li>
      )
    });
    return (
      <ul>
        {refinedMess}
      </ul>
    )
  }
});

module.exports ={
  Container
};
