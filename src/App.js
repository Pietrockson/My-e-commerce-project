import React from 'react';
import { Route, Switch} from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';


const HatsPage =()=> {
  return(
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
}

// const GiveAway=()=> {
//   return(
//     <div>
//       <h1>Give It Up</h1>
//     </div>
//   );
// }

function App () {
  return (
    <div >
      {/* using Routes in place of Switch and element in place of component as compatible with react-router-dom v6 */}
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} /> 
        {/* <Route path='/hats/give' component={GiveAway} /> */}
      </Switch>
    </div>
  );
}

export default App;
