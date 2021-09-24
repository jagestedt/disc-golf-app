import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.scss';

// Views
import LoginView from './components/views/LoginView';
import RegisterView from './components/views/RegisterView';
import DiscsView from './components/views/DiscsView';
import ScorecardsView from './components/views/Scorecards';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <nav>
          <ul className="p-0">
            <li>
              <a className="text-white" href="/login">
                Login
              </a>
            </li>
            <li>
              <a className="text-white" href="/register">
                Register
              </a>
            </li>
            <li>
              <a className="text-white" href="/discs">
                Discs
              </a>
            </li>
            <li>
              <a className="text-white" href="/scorecards">
                Scorecards
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <Switch>
            <Route exact path="/login" component={LoginView} />
            <Route exact path="/register" component={RegisterView} />
            <Route exact path="/discs" component={DiscsView} />
            <Route exact path="/scorecards" component={ScorecardsView} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
