import React from 'react';
// import { Counter } from './features/counter/Counter'
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        {/* <h1>Hello World! Let's build Slack.</h1> */}
        <Router>
        <>
          <Switch>
            <Route path="/" exact>
              {/* <Home /> */}
              <Header />
            </Route>
          </Switch>
        </>
      </Router>      
    </div>
  );
}

export default App;
