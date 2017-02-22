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
    // console.log(this.props.router);
    // self.setState({user: userName});
    // console.log(self);
    return {
      user: null,
      messages: messageList
    }
  },
  componentWillMount: function(){
    // window.setInterval(5000, this.fetchMessages);
  },
  fetchMessages: function(){
    console.log(this.state);
  },
  processLogin: function(name){
    // event.preventDefault();
    console.log(name);
    this.setState({user: name});

    console.log('login clicked container', this.state.user);
  },
  submitMessage: function(event){
    event.preventDefault();
    console.log('container clicked', event.target.value);
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
  getInitialState: function(){
    return (
      {value: ''}
    )
  },
  handleLogin: function(event){
    this.setState({value: event.target.value});
  },
  processLogin: function(event){
    event.preventDefault();

    // console.log('login clicked', this.state);
    this.props.processLogin(this.state.value);
    //set local storage for user here as well
    this.state = {value: ''}

  },
  render: function (){
    // console.log('Login Form', this.props);
    return (
      <form type="submit">
        <h2>Logged in as {this.props.user}</h2>
        <div className ="form-group">
          <label htmlFor="login">Login Name</label>
          <input idAttribute="login" className="form-control"
            placeholder="Login" value={this.state.value} onChange={this.handleLogin} />
          <button className="login btn" onClick= {this.processLogin} >Login</button>
        </div>
      </form>
    );
  }
});

var MessageForm = React.createClass({
  getInitialState: function(){
    return (
      {newMessage: ''}
    )
  },
  submitMessage: function(event){
    event.preventDefault();
    this.setState({newMessage: event.target.value});
    console.log('message button click', this.state);
  },
  render: function(){
    // console.log('mess Form', this.props);
    return (
      <form>
        <div className ="form-group">
          <label htmlFor="message">Write your message</label>
          <input idAttribute ="message" className="form-control"
            newMessage={this.state.newMessage} onChange={this.submitMessage} placeholder="New Message" />
          <button className="message btn" onClick={this.props.submitMessage}> Submit </button>
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
