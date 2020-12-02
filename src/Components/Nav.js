import React from 'react';
import PropTypes from 'prop-types';
import './styles/BadgesList.css';
function Nav(props) {
  const logged_out_nav = (
    <ul className="list-group">
      <li onClick={() => props.display_form('login')}
       className="list-group-item list-group-item-action list-group-item-secondary">Iniciar Sesion</li>
      <li onClick={() => props.display_form('signup')} 
      className="list-group-item list-group-item-action list-group-item-primary ">Registrarse</li>
    </ul>
  );
  return <div>{logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};
