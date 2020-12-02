import React, { Component } from 'react';
import Nav from '../Components/Nav';
import './styles/BadgeNew.css';
import './styles/App.css';
import Loginform from '../Components/Loginform';
import SignupForm from '../Components/SignupForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://localhost:8000/core/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username
        });
        
        if(this.state.logged_in){
          if (this.state.username==='belmut'){
            document.location.assign('/badges')
          }else {
          document.location.assign('/Reservar/admin')
          }
        }
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/core/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
        
      });
     
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
   
  
    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <Loginform handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <SignupForm handle_signup={this.handle_signup} />;
        break;
      default:
        form = null;
    }

    return (
      
      <div  className="box1">
       
      <div className="NaVertical">
       
     <div className="container-fluid">
       <div className="row">
        <div className="col-3" >
          <img class="img-fluid" src="https://www.kindpng.com/picc/m/273-2738790_login-lo-logo-hd-png-download.png" alt=""/>
          <Nav logged_in={this.state.logged_in} display_form={this.display_form} handle_logout={this.handle_logout}/>
  
        </div>
        
        <div className="col-6" >
          
          <div  >
         
          {form} 
          
          </div>
         
        </div> 
       
       </div> 
      
     </div> 
     </div>
     </div>
        
    );
    
  }
}

export default App;
