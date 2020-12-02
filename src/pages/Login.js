import React from 'react';
import "./styles/App.css";
import './styles/BadgeNew.css';
import Loginform from '../Components/Loginform';
class Login extends React.Component{
  render(){
  
    return(
        <div className="wrapper">
         
         
         <div className="wrapper" > 
      
          
           <div className="form-wrapper" > 
           <Loginform/>
           </div> 
           
       
          </div> 
        </div> 
        
       
      );
  }
}

export default Login;