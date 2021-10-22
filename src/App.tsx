import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Desktop from './Desktop'
import Login from './Login'
import Nav from './Nav'
const App = () => (
  <Router>
    
    <Nav />
    <Switch>
    <Route path="/home">
      <Desktop />
    </Route>
    <Route path="/">
      <Login />
    </Route>
    </Switch>
  </Router>
)

export default App;
