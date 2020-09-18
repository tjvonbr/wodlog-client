import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Home } from './views/Home';
import { AddWorkout } from './views/AddWorkout';
import './sass/index.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/addworkout" component={AddWorkout} />
      </div>
    </Router>
  );
}

export default App;
