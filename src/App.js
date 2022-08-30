import {Switch, Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
// import MeetupContext from './Context/MeetupContext'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/register" component={Register} />
    <Route component={NotFound} />
  </Switch>
)
export default App
