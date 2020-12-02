import React from 'react';
//import Navba from './Navba';
import {
  
    ModalBody,
    FormGroup,
   
  } from "reactstrap";
 
class Insertar extends React.Component{
  render(){
    return (
       
          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                 onChange={this.props.onChange}
                 className="form-control"
                 type="text"
                 name="id"
                 value={this.props.formValues.id}
                 
             
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Personaje: 
              </label>
              <input
               
                className="form-control"
                name="firstName"
                type="text"
                onChange={this.props.onChange}
                value={this.props.formValues.firstName}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Anime: 
              </label>
              <input
                className="form-control"
                name="lastName"
                type="text"
                onChange={this.props.onChange}
                value={this.props.formValues.lastName}
              />
            </FormGroup>
          </ModalBody>

          
    )
    
  }
}

export default Insertar;