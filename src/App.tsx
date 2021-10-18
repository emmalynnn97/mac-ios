import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Desktop from './Desktop'
import Login from './Login'
import Nav from './Nav'
const App = () => (
  <Router>
    <Nav />
    <Route path="/desktop">
      <Desktop />
    </Route>
    <Route path="/">
      <Login />
    </Route>
  </Router>
)

export default App;
