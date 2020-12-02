
import React from 'react'

import Layout1 from './Layout1';

import { BrowserRouter, Switch,Route } from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import Menu from '../pages/MenuLogin';
import Badges1  from '../pages/Solicitud';
import Vista from '../pages/VistasDocente';
import Home from '../pages/Home';



function App (){
  
              return(
                  <BrowserRouter>
                    <Switch>
                      <Layout1>

                        <Route exact path="/" component={Home}/>

                        <Route exact path="/MenuLogin" component={Menu}/>  
                       
                        <Route exact path="/Info" component={Badges1}/>
                  
                        <Route exact path="/InfoGraf" component={BadgeNew}/>    
                        <Route exact path="/Reservar" component={Menu}/>                 
                        <Route exact path="/badges/:badgeId/edit" component={Vista} />
                        <Route exact path="/Reservar/admin" component={Vista} />
                        <Route exact path="/badges/Insertar" component={Vista} />

                      </Layout1>  
                    </Switch>    
                  </BrowserRouter>
                  )
    
}

export default App;
