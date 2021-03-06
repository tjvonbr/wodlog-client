import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Home } from './views/Home';
import { AddWorkout } from './views/AddWorkout';
import { SignIn } from "./views/SignIn";
import { Register } from "./views/Register";
import { Results } from "./views/Results";
import { Workout } from "./views/Workout";
import './sass/index.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={SignIn} />
        <Route exact path="/register" component={Register} />
        <Route path="/dashboard" component={Home} />
        <Route path="/addworkout" component={AddWorkout} />
        <Route exact path="/results" component={Results} />
        <Route path="/results/:id" component={Workout} />
      </div>
    </Router>
  ); 
}

export default App;
