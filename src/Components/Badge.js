import React from 'react';
import confLogo from '../images/badge-header.svg'; 
import "./styles/Badge.css";
class Badge extends React.Component{
render(){
    
    
    return (
    <div className="Badge"> 
       <div className="Badge__header">
        <img src={confLogo} alt="Logo de la conferencia"/>   
       </div>
       <div className="Badge__section-name">
           <img className="Badge__avatar" 
            src={this.props.URL} alt="Avatar"/>
           <h1>
            {this.props.firstName}<br/>{this.props.lastName}   
           </h1>
       </div>
       <div className="Badge__section-info">
           <p>
            Estudiante San Marcos   
           </p><b/>
           <p>{this.props.Email}</p><b/>
           <p>{this.props.jobTitle}</p><b/>
           <p>{this.props.twitter}</p> 
            
       </div>
       <div className="Badge__footer">#platzicom</div> 
    </div>       

)
}
}

export default Badge;