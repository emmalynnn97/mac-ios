import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import  Desktop  from './Desktop'
import  Login  from './Login'
const App = () => (
  <Router>
    <Switch>
      <Route path="/desktop">
        <Desktop/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
    </Switch>
  </Router>
)

export default App;
