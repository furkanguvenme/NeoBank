import './App.css'
import { Route, Switch } from "react-router-dom";
import { Home } from './Components/Home';

function App() {

  return (
    <Switch>
      <Route path='/'>
        <Home/>
      </Route>
    </Switch>
  )
}

export default App
