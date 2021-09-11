import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Components/Home/Home';
import Landing from './Components/Landing/Landing';
import Create from './Components/Create/Create';
import Details from './Components/Details/Details';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/home' component={Home} />
          <Route exact path= '/create' component={Create}/>
          <Route exact path= '/:id' component={Details}/>
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
