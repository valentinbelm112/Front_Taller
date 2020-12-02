import React from 'react';

import './styles/Navbar.css'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
 
} from './NavbarElements';

class Navbar extends React.Component{
    render(){
        return(
          <>
          <Nav>
            <NavLink to='/' activeClassName="logo1">
            <img className="lo" src={'https://fisiinteligenciaartificial.files.wordpress.com/2018/03/cropped-1200px-escudo_facultad_de_ingenierc3ada_de_sistemas_e_informc3a1tica_de_la_unmsm-svg.png?w=200'} alt='logo' />
            </NavLink>
            <Bars />
            <NavMenu>
              <NavLink to='/' activeStyle>
                Home
              </NavLink>
              <NavLink to='/Reservar' activeStyle>
                Reservar
              </NavLink>
              <NavLink to='/Info' activeStyle>
                Enviar solicitud
              </NavLink>
              <NavLink to='/InfoGraf' activeStyle>
                Informacion Grafica
              </NavLink>
              <NavLink to='/Cerrar' activeStyle>
                Cerrar Sesion
              </NavLink>
              {/* Second Nav */}
              {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
            </NavMenu>
            
          </Nav>
        </>
        );
         
        
    }
}

export default Navbar;