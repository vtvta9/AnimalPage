import React from 'react';
import Form from './AnimalPage/form';
import AnimalPage from './AnimalPage/animal';
import "./App.css"

class App extends React.Component {
  database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ]
  state = {
    error: '',
    isSubmit: false
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {uname, pass} = document.forms[0];
    const result = this.database.find(user => user.username === uname.value && user.password === pass.value);
    !result ? this.setState({error: 'Invalid username or password'}) : this.setState({isSubmit: true});
    
  }
  handleLogout = (e) => {
    e.preventDefault();
    window.open('http://localhost:3000/', '_self');
  }
  render(){
    const {error, isSubmit} = this.state;
    return(
          isSubmit 
          ? 
          <AnimalPage
            handleLogout={this.handleLogout}
          />
          :
          <div className="app">
            <div className="login-form">
              <div className="title">Sign In</div>
              <Form
                error={error}
                handleSubmit={this.handleSubmit}
              />
            </div>
          </div>
      
    )
  }
}
export default App;