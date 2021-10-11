import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Routing
import ProtectedRoute from './components/routing/ProtectedRoute';

import logo from './logo.svg';
import './App.scss';

// Views
import ProtectedView from './components/views/ProtectedView';
import LoginView from './components/views/Users/LoginView';
import RegisterView from './components/views/Users/RegisterView';
import DiscsView from './components/views/Discs/DiscsView';
import ScorecardsView from './components/views/Scorecards';
import UsersListView from './components/views/Users/UsersListView';
// import DiscsListView from './components/views/Discs/DiscsListView';

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
              <a className="text-primary" href="/login">
                Login
              </a>
            </li>
            <li>
              <a className="text-primary" href="/register">
                Register
              </a>
            </li>
            <li>
              <a className="text-primary" href="/discs">
                Discs
              </a>
            </li>
            <li>
              <a className="text-primary" href="/users">
                Users
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <Switch>
            <ProtectedRoute exact path="/" component={ProtectedView} />
            <Route exact path="/login" component={LoginView} />
            <Route exact path="/register" component={RegisterView} />
            <ProtectedRoute exact path="/discs" component={DiscsView} />
            <ProtectedRoute exact path="/scorecards" component={ScorecardsView} />
            <ProtectedRoute exact path="/users-list" component={UsersListView} />
            {/* <ProtectedRoute exact path="/discs-list" component={DiscsListView} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
