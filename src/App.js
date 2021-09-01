import logo from './logo.svg';
import './App.css';
import React from 'react'
import Person  from './Person.js';
import { Fragment } from 'react';
import Students from './components/Students';
import Welcome from './components/Welcome';
//import Welcome from './components/Welcome';
// function App() {
//   return (
//     React.createElement('div',null,React.createElement('div',null,React.createElement('p',null,'Hello react from create elemnt'))
//     )
//   );
// }
/*
function App (){
  const date = new Date()
  return (
    <Fragment>
<div>
  <Person></Person>
 <div>{date.toISOString()}</div>
</div>
<div>
  Another function using fragment
</div>
</Fragment>
  )
}
*/
function App (){
  return (
      <Fragment>
      <div>Company Data </div>
        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Chase bank</td>
            <td>Maria Andreas</td>
            <td>Us</td>
          </tr>
        </table>
        <Students></Students>  
        <Welcome></Welcome>
        </Fragment>
    
  )
}

export default App;
