//const element =document.createElement('h1');
//element.innerText="Hello ,Platzi Baggs";

//const container= document.getElementById('app');
//container.appendChild(element)

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'
import App from './Components/App'
//const jsx =<h1>Hello,Platzi Badges </h1>
//const element=React.createElement('a',{href:'https://platzi.com'},'Ir a Platzi');
//const name ='Selena';
//const sum=() => 3+3;
//const element =React.createElement(
//  'h1',
//   {},
 //    `Hola soy ${name}`
//);
//const  jsx=<h1>Hola soy,{sum()}</h1>;
/* jsx =<div>
       <h1>Hola ,soy  Valentin</h1> 
       <p>
         Soy ingeniero de sistemas  
       </p>

</div>s
*/

const container=document.getElementById('app');
ReactDOM.render(<App/>,container);