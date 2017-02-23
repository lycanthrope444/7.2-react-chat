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
    });
    console.log(this.props.router);
    // self.setState({user: userName});
    // console.log(self);
    return {
      username: this.props.router.user,
      messages: messageList
    }
  },
  componentWillMount: function(){
    var interval = window.setInterval(this.displayList, 5000);
  },
  // fetchMessages: function(){
  //
  //   console.log(this.state);
  // },
  processLogin: function(name){
    // event.preventDefault();
    console.log(name);
    localStorage.setItem('user', name);
    this.setState({username: name});

    console.log('login clicked container', this.state.user);
  },
  submitMessage: function(message){
    var newMessage = new models.MessageModel({
      username: this.state.username,
      message: message,
      timestamp: new Date()
    });
    console.log(newMessage);
    this.state.messages.create(newMessage);
  },
  displayList: function(){
    var mList = this.state.messages.models;
    // console.log(messageList);
    var refinedMess = mList.map(function(iterator, index){
      return (
        <li key={index}>
          <div className="formatter">
            <span className="user-name">{iterator.attributes.username}</span>
            <span className="timestamp">{iterator.attributes.timestamp}</span>
          </div>
          <div className="message-box">
            <span className ="message">{iterator.attributes.message}</span>
          </div>
        </li>
      )
    });
    this.state.messageList = refinedMess;
  },
  render: function(){
    // console.log(this.props);
    // console.log(this.state);
    return (
      <div className="container">

        <LoginForm processLogin={this.processLogin} data={this.state}/>
        <MessageForm submitMessage={this.submitMessage} data={this.state}/>
        <MessageList displayList={this.displayList} data={this.state}/>
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
  updateName: function(event){

    console.log(this.props.username);
  },
  render: function (){
    // console.log('Login Form', this.props);
    return (
      <form className="login-section" type="submit">
        <h2 onChange={this.updateName}>Logged in as {this.props.username}</h2>
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
  handleMessage: function(event){
    this.setState({newMessage :event.target.value});
  },
  submitMessage: function(event){
    event.preventDefault();
    console.log(this);
    this.props.submitMessage(this.state.newMessage);
    this.setState({newMessage: ''});
    // this.setState({newMessage: event.target.value});
    // console.log('message button click', this.state);
  },
  render: function(){
    // console.log('mess Form', this.props);
    // console.log(this);
    return (
      <form>
        <div className ="form-group">
          <label htmlFor="message">Write your message</label>
          <input idAttribute ="message" className="form-control"
            newMessage={this.state.newMessage} onChange={this.handleMessage} placeholder="New Message" />
          <button className="message btn" onClick={this.submitMessage}> Submit </button>
        </div>
      </form>
    )
  }
});

var MessageList = React.createClass({
  getInitialState: function(){
    return({messageList: []})
  },
  displayList: function(){
    console.log(this.props);
    this.props.displayList();
    this.state.messageList = this.props.data.messageList;
  },
  render: function(){
    // console.log(this.filterList);
    this.displayList();
    return (
      <ul className="message-list">
        {this.state.messageList}
      </ul>
    )
  }
});

module.exports ={
  Container
};
