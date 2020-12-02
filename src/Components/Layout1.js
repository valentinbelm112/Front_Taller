import React from 'react';
import Navba from './Navba';
function Layout1(props){
  //  const children=props.children;
    return (
        <React.Fragment>
           <Navba/>
           { props.children}
           
        </React.Fragment>);
    
}

export default Layout1;