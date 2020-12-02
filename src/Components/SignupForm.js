import React from 'react';
import PropTypes from 'prop-types';
import "./styles/App.css";
class SignupForm extends React.Component {
  state = {
    username: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
        <div className="wrapper" > 
      
          
          <div className="form-wrapper" > 
         
         
            <form className='form' onSubmit={e => this.props.handle_signup(e, this.state)}>
            <h1>Registrarse</h1>
            <div className='form-group'>       
                <label >
                  Usuario
                  <input
                   className="form-control"
                   type="text"
                   name="username"
                   value={this.state.username}
                   onChange={this.handle_change}
                />
                </label>
            </div> 
            <div className='form-group'>  
                <label >
                  password
                  <input
                   className="form-control" 
                   
                  type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handle_change}
                  />
                </label>
            </div> 
            <button className="btn btn-primary">Login</button>
          </form>
          </div> 
          </div>   
      
    );
  }
}

export default SignupForm;

SignupForm.propTypes = {
  handle_signup: PropTypes.func.isRequired
};
