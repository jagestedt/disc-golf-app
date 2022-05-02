import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

// Routing
import ProtectedRoute from "./components/routing/ProtectedRoute"

import "./App.scss"

import { Nav, Navbar } from "react-bootstrap"

// Views
import LoginView from "./components/views/Users/LoginView"
import RegisterView from "./components/views/Users/RegisterView"
import DiscsView from "./components/views/Discs/DiscsView"
import ScorecardsView from "./components/views/Scorecards"
import UsersView from "./components/views/Users/UsersView"

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar expand="sm">
            <Navbar.Brand href="/">dga-wip</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/discs">Discs</Nav.Link>
                <Nav.Link href="/users">Users</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
        <div>
          <Switch>
            <Route exact path="/login" component={LoginView} />
            <Route exact path="/register" component={RegisterView} />
            <ProtectedRoute exact path="/discs" component={DiscsView} />
            <ProtectedRoute
              exact
              path="/scorecards"
              component={ScorecardsView}
            />
            <ProtectedRoute exact path="/users" component={UsersView} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
